/**
 * See doc for details
 * https://formatjs.io/docs/react-intl/components
 */
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { en } from '../locales/langs/en';

type Key = keyof typeof en;

export const useLocale = () => {
  const { locales, locale } = useRouter();
  const intl = useIntl();

  const format = (key: Key | number, options?: any) => {
    if (typeof key === 'number') {
      return intl.formatNumber(key);
    }
    return intl.formatMessage(
      {
        defaultMessage: `Missing **${key}** key`,
        id: key,
      },
      { ...(options || {}) }
    );
  };

  return {
    locale,
    locales,
    t: format,
  };
};
