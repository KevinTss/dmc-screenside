import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header as HeaderEl, Nav, NavLink } from './style';
import { useLocale } from '../../hooks';

const Header = () => {
  const { push, asPath } = useRouter();
  const { locale, t } = useLocale();

  return (
    <HeaderEl>
      <Nav>
        <Link href='/' locale={locale} passHref>
          <NavLink>{t('header.nav.home')}</NavLink>
        </Link>
        {/* <Link href='/catalogue' locale={locale} passHref>
          <NavLink>{t('header.nav.shop')}</NavLink>
        </Link>
        <Link href='/a-propos' locale={locale} passHref>
          <NavLink>{t('header.nav.about')}</NavLink>
        </Link> */}
        <Link href='/contact' locale={locale} passHref>
          <NavLink>{t('header.nav.contact')}</NavLink>
        </Link>
      </Nav>

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
    </HeaderEl>
  );
};

export default Header;
