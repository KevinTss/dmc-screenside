import { useRouter } from 'next/router';

import { locales as localesFile } from '../locales';

export const useLocale = () => {
  const { locales, locale } = useRouter();

  const translate = (translationKey: string) => {
    if (!locale) return translationKey;

    const keys = translationKey.split('.');
    const final = keys.reduce((accumulator, currentValue) => {
      // TODO: Improve perfs using the early break  method
      // https://stackoverflow.com/questions/36144406/how-to-early-break-reduce-method
      if (accumulator === null) {
        if (
          // @ts-ignore
          typeof localesFile[locale][currentValue] !== 'string' &&
          // @ts-ignore
          typeof localesFile[locale][currentValue] !== 'object'
        ) {
          return undefined;
        }
        // @ts-ignore
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
