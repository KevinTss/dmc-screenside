import { useContext } from 'react';
import { AppStateContext } from 'src/contexts';

export const useCart = () => {
  const {
    state: { productInCart },
  } = useContext(AppStateContext);

  return {
    products: productInCart,
  };
};
