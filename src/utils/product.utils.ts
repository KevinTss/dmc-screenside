import { PRODUCT_CONTENT } from '../constants';
import { ProductFromShopify, Product } from '../types';

export const getProductImage = (handle: string) => {
  // let imageUrl = '../../assets/fallback.png';
  // let imageUrl = require('../../assets/fallback.png');

  try {
    const productImage = require(`src/assets/products/${handle}.png`);

    if (!productImage?.default?.src) throw Error('Asset not found');

    return (productImage.default.src as string) || undefined;
  } catch (e: any) {
    if ('message' in e) {
      console.warn('Error in import product image', e.message);
    }
    return;
  }
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

  if (!product) return '';

  return product.description_en || '';
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
  description: getProductDescription(product.handle),
});
