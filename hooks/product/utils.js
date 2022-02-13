export const getProductImage = (product) => {
  const imageUrl = product?.images?.edges?.find(
    ({ node }) => !!node.originalSrc
  ).node.originalSrc;

  return imageUrl || '/assets/fallback.png';
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
