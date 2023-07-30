import { NavLink } from 'src/components/ui';
import { useLocale } from 'src/hooks';

import { Nav as NavEl, Items, Item } from './Nav.styles';

type NavProps = {
  isVertical?: boolean
}

export const Nav = ({ isVertical = false }: NavProps) => {
  const { locale, t } = useLocale();

  return (
    <NavEl>
      <Items $isVertical={isVertical}>
        <Item>
          <NavLink href='/' locale={locale} passHref>
            {t('component.Nav.home')}
          </NavLink>
        </Item>
        <Item>
          <NavLink href='/shop' locale={locale} passHref>
            {t('component.Nav.shop')}
          </NavLink>
        </Item>
        <Item>
          <NavLink href='/contact' locale={locale} passHref>
            {t('component.Nav.contact')}
          </NavLink>
        </Item>
      </Items>
    </NavEl>
  );
}
