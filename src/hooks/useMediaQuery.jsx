import { useEffect, useState, useCallback } from 'react';

function getWindowWidth() {
  if (typeof window === 'undefined') return;

  return window?.innerWidth || 0;
}

export const WIDTH = {
  MOBILE: 768,
};

export const useMediaQuery = (minWidth) => {
  const [state, setState] = useState({
    windowWidth: getWindowWidth(),
    isDesiredWidth: false,
  });

  const resizeHandler = useCallback(() => {
    if (window === undefined) return;

    const currentWindowWidth = getWindowWidth();
    const isDesiredWidth = currentWindowWidth < minWidth;
    setState({ windowWidth: currentWindowWidth, isDesiredWidth });
  }, [minWidth]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler, state.windowWidth]);

  useEffect(() => {
    resizeHandler();
  }, [resizeHandler]);

  return state.isDesiredWidth;
};
