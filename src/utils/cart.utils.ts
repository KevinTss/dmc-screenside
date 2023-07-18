import { LocalCartProduct } from 'src/types';

const DEFAULT_NUMBER_OF_PRODUCT_BEFORE_ORDER = 12;

const isMultipleOf = (
  quantity: number,
  number: number = DEFAULT_NUMBER_OF_PRODUCT_BEFORE_ORDER
) => quantity % number === 0;

const getNextMultipleOf = (
  quantity: number,
  number: number = DEFAULT_NUMBER_OF_PRODUCT_BEFORE_ORDER
) => {
  const remainder = quantity % number;
  if (remainder === 0) return quantity;
  return quantity + (number - remainder);
};

export const getTotalProductsQuantity = (
  productsInCart?: LocalCartProduct[]
) => {
  // Some weird bug here so make sure we have a number as fallback
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

export const canGoToCheckout = (productsInCart?: LocalCartProduct[]) => {
  const quantity = getTotalProductsQuantity(productsInCart);

  return isMultipleOf(quantity);
};

export const getProductLeftBeforeOrder = (
  productsInCart?: LocalCartProduct[]
) => {
  const quantity = getTotalProductsQuantity(productsInCart);
  if (isMultipleOf(quantity)) return 0;
  const nextMultiple = getNextMultipleOf(quantity);
  return nextMultiple - quantity;
};

export const getPercentageToNextMultiple = (
  productsInCart?: LocalCartProduct[]
) => {
  const quantity = getTotalProductsQuantity(productsInCart);
  const nextMultiple = getNextMultipleOf(quantity);
  const percentage = (quantity / nextMultiple) * 100;
  return percentage;
};
