import { isSSR } from '../../utils';

const LOCAL_STORAGE_KEY_CART = 'cart';

export const getCartFromLocalStorage = () => {
  if (isSSR) return null;

  return JSON.parse(
    window?.localStorage?.getItem(LOCAL_STORAGE_KEY_CART) || '{}'
  );
};

export const setCartToLocalStorage = (data) => {
  if (!data || isSSR) return;

  window.localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(data));
};
