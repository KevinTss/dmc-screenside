import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { IntlProvider } from "react-intl";


import { en } from './langs/en'
import { i18n } from '../../next.config'
import { Locales } from '../../types'

const messages: Record<Locales, typeof en> = {
  en
};

type LocalesProviderProps = {
  children: ReactNode
}

export const LocalesProvider = ({ children }: LocalesProviderProps) => {
  const { locale } = useRouter();

  const currentLocale = (locale || i18n.defaultLocale) as Locales

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      {children}
    </IntlProvider>
  );
}
