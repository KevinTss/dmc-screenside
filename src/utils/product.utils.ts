import { ProductFromShopify } from 'src/types';
import { PRODUCT_CONTENT } from 'src/constants';

export const getProductImage = (handle: string) => {
  let imageUrl = '/assets/fallback.png';

  try {
    const productImage = require(`assets/products/${handle}.png`);

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

const getProductPrice = (product: ProductFromShopify) => {
  const amount = product?.variants?.edges?.[0].node.priceV2.amount;
  const currency = product?.variants?.edges?.[0].node.priceV2.currency;

  return {
    amount: Number.isNaN(Number(amount)) ? 0 : Number(amount),
    currency: currency || 'EUR',
  };
};

const getVariantId = (product: ProductFromShopify) => {
  const variantId = product?.variants?.edges?.[0].node.id;

  return variantId || null;
};

const getProductDescription = (handle: string) => {
  const product = PRODUCT_CONTENT.find((product) => product.handle === handle);

  if (!product) return null;

  return product.description_en;
};

/**
 * Retrieve product complete data based on fetched result on spotify
 */
export const getProductData = (product: ProductFromShopify) => {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    imageUrl: getProductImage(product.handle),
    price: getProductPrice(product),
    variantId: getVariantId(product),
  };
};
