import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { IntlProvider } from "react-intl";

import en from './langs/en.json'
import { i18n } from '../../next.config'

const messages = {
  en
};

type LocalesProviderProps = {
  children: ReactNode
}

export const LocalesProvider = ({ children }: LocalesProviderProps) => {
  const { locale } = useRouter();

  const currentLocale = locale || i18n.defaultLocale

  return (
    // @ts-ignore
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      {children}
    </IntlProvider>
  );
}
