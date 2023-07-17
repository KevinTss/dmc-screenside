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

const isMultipleOf = (quantity: number, number: number = 12) =>
  quantity % number !== 0;

export const canGoToCheckout = (productsInCart?: LocalCartProduct[]) => {
  const quantity = getTotalProductsQuantity(productsInCart);

  return isMultipleOf(quantity);
};
