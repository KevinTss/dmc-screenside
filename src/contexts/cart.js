import { useEffect, useState, createContext } from 'react';
import { useMutation } from 'react-query';

import { CREATE_CART, LOAD_CART, ADD_TO_CART } from '../hooks/cart/queries';
import {
  setCartToLocalStorage,
  getCartFromLocalStorage,
  removeCartFromLocalStorage,
} from '../hooks/cart/utils';
import { ErrorCode } from '../utils';
import { shopifyQuery } from '../utils/shopify.utils';

export const CartContext = createContext({ data: null });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [errors, setErrors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isLoading: isAddLoading } = useMutation(
    ({ cartId, variantId }) =>
      shopifyQuery({
        query: ADD_TO_CART,
        variables: { cartId, variantId },
      }),
    {
      onSuccess(response) {
        // console.log('onSuccess', response);
        let isSuccess = !response?.data?.errors?.length;
        if (isSuccess) {
          const newLines =
            response?.data?.data?.cartLinesAdd?.cart?.lines?.edges ||
            cart.lines ||
            [];
          const newCart = {
            id: cart.id,
            checkoutUrl: cart.checkoutUrl,
            estimatedCost: cart.estimatedCost,
            lines: newLines,
          };
          setCartToLocalStorage(newCart);
          setCart(newCart);
        } else {
          setErrors(response.data.errors.map((err) => err.message));
          removeCartFromLocalStorage();
          // setCart(null);
          // createCart();
        }
      },
      onError(p) {
        // console.log('onError', p);
        setErrors(() => [ErrorCode._GENERIC]);
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
        const isSuccess = !!response?.data?.data?.cart;

        if (isSuccess) {
          // console.log('success load cart', response);
          const newCart = {
            id: cart.id,
            checkoutUrl: cart.checkoutUrl,
            estimatedCost: response?.data?.data?.cart?.estimatedCost,
            lines: response?.data?.data?.cart?.lines?.edges,
          };
          setCartToLocalStorage(newCart);
          setCart(newCart);
        } else {
          removeCartFromLocalStorage();
          setCart(null);
          createCart();
        }
      },
      // onError(p) {
      //   console.log('on error load', p);
      // },
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

  // useEffect(() => {
  //   if (cart?.id) {
  //     loadCart(cart.id);
  //   } else if (!cart) {
  //     createCart();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const add = (productToAdd) => {
    if (!cart?.id) return;

    mutate({ cartId: cart.id, variantId: productToAdd.variantId });
  };

  const reset = () => {
    removeCartFromLocalStorage();
    setErrors([]);
    setCart(null);
    createCart();
  };

  return (
    <CartContext.Provider
      value={{
        data: cart,
        add,
        isAddLoading,
        errors,
        reset,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
