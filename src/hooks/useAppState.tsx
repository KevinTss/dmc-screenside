import { useContext } from 'react';

import { AppStateContext } from '../contexts';

export const useAppState = () => {
  const data = useContext(AppStateContext);

  return data;
};
