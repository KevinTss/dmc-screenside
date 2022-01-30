import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { shopifyQuery } from '../../services/shopify-queries';
import { getCartFromLocalStorage, setCartToLocalStorage } from './utils';
import { CREATE_CART, LOAD_CART, ADD_TO_CART } from './queries';

export const useCart = ({ createCard = false } = {}) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const { mutate: addToCart } = useMutation(
    (cartId, variantId) =>
      shopifyQuery({
        query: ADD_TO_CART,
        variables: { cartId, variantId },
      }),
    {
      onSuccess(response) {
        console.log('success', response);
      },
    }
  );
  const { mutate: loadCart } = useMutation(
    (cartId) =>
      shopifyQuery({
        query: LOAD_CART,
        variables: { cartId },
      }),
    {
      onSuccess(response) {
        const newCart = {
          id: cart.id,
          checkoutUrl: cart.checkoutUrl,
          estimatedCost: response?.data?.data?.cart?.estimatedCost,
          lines: response?.data?.data?.cart?.lines?.edges,
        };
        setCartToLocalStorage(newCart);
        setCart(newCart);
      },
    }
  );
  const { mutate: createCart } = useMutation(
    () =>
      shopifyQuery({
        query: CREATE_CART,
        variables: {},
      }),
    {
      onSuccess(response) {
        const cartId = response?.data?.data?.cartCreate?.cart?.id;
        const newCart = {
          id: cartId,
          checkoutUrl: response?.data?.data?.cartCreate?.cart?.checkoutUrl,
        };
        setCartToLocalStorage(newCart);
        setCart(newCart);
        loadCart(cartId);
      },
    }
  );

  useEffect(() => {
    if (!createCard) return;

    if (cart && !cart.estimatedCost) {
      loadCart(cart.id);
    } else if (!cart) {
      createCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const addToCart = () => {};

  return {
    data: cart,
  };
};
