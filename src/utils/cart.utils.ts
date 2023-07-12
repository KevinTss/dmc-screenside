import { LocalCartProduct } from 'src/types';

export const getTotalProductsQuantity = (
  productsInCart?: LocalCartProduct[]
) => {
  // Some weird bug here so make sure we
  if (!productsInCart) return 0;
  return productsInCart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
};

export const getTotalProductsPrice = (productsInCart?: LocalCartProduct[]) => {
  if (!productsInCart) return 0;
  return productsInCart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.pricePerUnit * currentValue.quantity,
    0
  );
};
