import { isSSR } from '../../utils';

const LOCAL_STORAGE_KEY_CART = 'cart';

export const getCartFromLocalStorage = () => {
  if (isSSR()) return null;

  return window?.localStorage?.getItem(LOCAL_STORAGE_KEY_CART)
    ? JSON.parse(window?.localStorage?.getItem(LOCAL_STORAGE_KEY_CART))
    : null;
};

export const setCartToLocalStorage = (data) => {
  if (!data || isSSR()) return;

  window.localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(data));
};

export const removeCartFromLocalStorage = () => {
  if (isSSR()) return;

  window.localStorage.removeItem(LOCAL_STORAGE_KEY_CART);
};
