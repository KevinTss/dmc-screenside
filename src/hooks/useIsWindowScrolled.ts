import { useEffect, useState } from 'react';

import { isSSR } from '../utils';

export const useIsWindowScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isSSR()) {
      const handleScroll = () => {
        setIsScrolled(window.pageYOffset > 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return isScrolled;
};
