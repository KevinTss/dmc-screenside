import { useContext } from 'react';

import { AppStateContext } from '../contexts';

export const useCart = () => {
  const {
    state: { productInCart },
  } = useContext(AppStateContext);

  return {
    products: productInCart,
  };
};
