export const getProductImage = (product) => {
  const imageUrl = product?.node?.images?.edges?.find(
    ({ node }) => !!node.originalSrc
  ).node.originalSrc;

  return imageUrl || '/assets/fallback.png';
};

export const getProductPrice = (product) => {
  const amount = product?.node?.variants?.edges?.[0].node.priceV2.amount;
  const currency = product?.node?.variants?.edges?.[0].node.priceV2.currency;

  return {
    amount: Number.isNaN(Number(amount)) ? 0 : Number(amount),
    currency: currency || 'EUR',
  };
};

export const getVariantId = (product) => {
  const variantId = product?.node?.variants?.edges?.[0].node.id;

  return variantId || null;
};
