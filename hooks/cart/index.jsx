import { useContext } from 'react';

import { CartContext } from '../../contexts';

export const useCart = () => {
  const data = useContext(CartContext);

  return data;
};
