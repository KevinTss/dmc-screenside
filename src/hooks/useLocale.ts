import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export const useLocale = () => {
  const { locales, locale } = useRouter();
  const intl = useIntl();

  return {
    locale,
    locales,
    t: (key: string) => intl.formatMessage({ id: key }),
  };
};
