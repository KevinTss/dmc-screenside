import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import lang from 'src/locales/langs/en.json';

type Key = keyof typeof lang;

export const useLocale = () => {
  const { locales, locale } = useRouter();
  const intl = useIntl();

  return {
    locale,
    locales,
    t: (key: Key) => intl.formatMessage({ id: key }),
  };
};
