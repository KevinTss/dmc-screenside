import { PRODUCT_CONTENT } from 'src/constants';
import { ProductFromShopify, Product } from 'src/types';

export const getProductImage = (handle: string) => {
  // let imageUrl = 'src/assets/fallback.png';
  let imageUrl = require('src/assets/fallback.png');

  try {
    const productImage = require(`src/assets/products/${handle}.png`);

    if (!productImage?.default?.src) throw Error('Asset not found');

    imageUrl = productImage.default.src;
  } catch (e: any) {
    if ('message' in e) {
      console.warn('Error in import product image', e.message);
    }
    return imageUrl;
  }

  return imageUrl;
};

export const getProductPrice = (
  product: Pick<ProductFromShopify, 'variants'>
) => {
  const amount = product?.variants?.edges?.[0].node.priceV2.amount;
  const currencyCode = product?.variants?.edges?.[0].node.priceV2.currencyCode;

  return {
    amount,
    currencyCode: currencyCode || 'EUR',
  };
};

export const getVariantId = (product: Pick<ProductFromShopify, 'variants'>) => {
  const variantId = product.variants.edges[0].node.id;

  return variantId;
};

const getProductDescription = (handle: string) => {
  const product = PRODUCT_CONTENT.find((product) => product.handle === handle);

  if (!product) return null;

  return product.description_en;
};

type GetProductFromShopifyProductParams = {
  product: ProductFromShopify;
};

export const getProductFromShopifyProduct = ({
  product,
}: GetProductFromShopifyProductParams): Product => ({
  title: product.title,
  handle: product.handle,
  imageUrl: getProductImage(product.handle),
  price: getProductPrice(product),
  variantId: getVariantId(product),
});
