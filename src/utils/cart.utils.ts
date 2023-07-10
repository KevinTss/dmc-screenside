import { LocalCartProduct } from 'src/types';

export const getTotalProductsQuantity = (productsInCart: LocalCartProduct[]) =>
  productsInCart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
