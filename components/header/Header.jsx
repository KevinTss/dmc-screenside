import Link from 'next/link';
import { useRouter } from 'next/router';

import { useLocale } from '../../hooks';

const Header = () => {
  const { push, asPath } = useRouter();
  const { locale, t } = useLocale();

  return (
    <header>
      <Link href='/' locale={locale}>
        <a>{t('header.home')}</a>
      </Link>
      <Link href='/catalogue' locale={locale}>
        <a>{t('header.catalog')}</a>
      </Link>
      <Link href='/a-propos' locale={locale}>
        <a>{t('header.about')}</a>
      </Link>
      <Link href='/contact' locale={locale}>
        <a>{t('header.contact')}</a>
      </Link>

      <div>
        Lang:{' '}
        <button
          onClick={() => {
            push(asPath, asPath, {
              locale: locale === 'fr' ? 'en' : 'fr',
            });
          }}
        >
          {locale === 'fr' ? 'en' : 'fr'}
        </button>
      </div>
    </header>
  );
};

export default Header;
