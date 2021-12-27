import { useRouter } from 'next/router';

import localesFile from '../locales';

export const useLocale = () => {
  const { locales, locale } = useRouter();

  const translate = (translationKey) => {
    const keys = translationKey.split('.');
    const final = keys.reduce((accumulator, currentValue) => {
      // TODO: Improve perfs using the early break  method
      // https://stackoverflow.com/questions/36144406/how-to-early-break-reduce-method
      if (accumulator === null) {
        if (
          typeof localesFile[locale][currentValue] !== 'string' &&
          typeof localesFile[locale][currentValue] !== 'object'
        ) {
          return undefined;
        }
        return localesFile[locale][currentValue];
      } else if (accumulator === undefined) {
        return undefined;
      }
      if (
        typeof accumulator[currentValue] !== 'string' &&
        typeof accumulator[currentValue] !== 'object'
      ) {
        return undefined;
      }
      return accumulator[currentValue];
    }, null);

    if (final === undefined) {
      return '**' + translationKey + '**';
    }

    return final;
  };

  return {
    locale,
    locales,
    t: translate,
  };
};
