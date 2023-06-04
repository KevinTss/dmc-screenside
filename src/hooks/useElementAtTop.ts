import { useEffect, useState } from 'react';
import { isSSR } from 'src/utils';

type Options = {
  defaultValue?: boolean;
};

export const useElementAtTop = (el?: HTMLElement, options?: Options) => {
  const [isAtTop, setIsAtTop] = useState(options?.defaultValue || false);

  useEffect(() => {
    if (!isSSR() && !!el) {
      const handleScroll = () => {
        const rect = el.getBoundingClientRect();
        console.log('rect.top', rect.top);
        setIsAtTop(rect.top <= 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [el]);

  return isAtTop;
};
