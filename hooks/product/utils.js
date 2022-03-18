import productsContent from '../../content/products.json';

export const getProductImage = (handle) => {
  let imageUrl = '/assets/fallback.png';

  try {
    const productImage = require(`../../assets/products/${handle}.png`);

    if (!productImage?.default?.src) throw Error('Asset not found');

    imageUrl = productImage.default.src;
  } catch (e) {
    console.warn('Error in import product image', e.message);
  }

  return imageUrl;
};

export const getProductPrice = (product) => {
  const amount = product?.variants?.edges?.[0].node.priceV2.amount;
  const currency = product?.variants?.edges?.[0].node.priceV2.currency;

  return {
    amount: Number.isNaN(Number(amount)) ? 0 : Number(amount),
    currency: currency || 'EUR',
  };
};

export const getVariantId = (product) => {
  const variantId = product?.variants?.edges?.[0].node.id;

  return variantId || null;
};

export const getProductDescription = (handle) => {
  const product = productsContent.items.find(
    (product) => product.handle === handle
  );

  return product.description_en;
};
