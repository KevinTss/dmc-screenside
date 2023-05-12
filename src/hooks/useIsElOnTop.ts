import { isSSR } from 'src/utils';

export const useIsElOnTop = (el?: HTMLElement) => {
  if (isSSR() || !el) return false;

  return true;
};
