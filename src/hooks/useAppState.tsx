import { useContext } from 'react';
import { AppStateContext } from 'src/contexts';

export const useAppState = () => {
  const data = useContext(AppStateContext);

  return data;
};
