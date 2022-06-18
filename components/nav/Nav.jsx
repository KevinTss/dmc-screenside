import { Nav as NavEl, Items, Item } from './style';
import { NavLink } from '../ui';
import { useLocale } from '../../hooks';

export default function Nav({ isVertical }) {
  const { locale, t } = useLocale();

  return (
    <NavEl>
      <Items isVertical={isVertical}>
        <Item>
          <NavLink href='/' locale={locale} passHref>
            {t('header.nav.home')}
          </NavLink>
        </Item>
        <Item>
          <NavLink href='/shop' locale={locale} passHref>
            {t('header.nav.shop')}
          </NavLink>
        </Item>
        <Item>
          <NavLink href='/contact' locale={locale} passHref>
            {t('header.nav.contact')}
          </NavLink>
        </Item>
      </Items>
    </NavEl>
  );
}
