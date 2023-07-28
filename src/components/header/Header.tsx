import { useRouter } from 'next/router'

// import { useState } from 'react';
import {
  Container,
  Left,
  Middle,
  Right,
  // SearchContainer,
  // Input,
  // Logo,
  NavLink,
  Button,
  Badge
} from './Header.styles';
import { Logo } from '../../components/ui/logo';
import { useIsWindowScrolled, useLocale, useAppState } from '../../hooks';
import { getTotalProductsQuantity } from '../../utils'

// import { useCart, WIDTH, useMediaQuery } from '../../hooks';
// import CardDrawer from '../cart/drawer';
// import MobileNav from '../mobile-nav';
// import Nav from '../nav';

type HeaderProps = {
  isBlack: boolean
}

export const Header = ({ isBlack }: HeaderProps) => {
  // const { open } = useCart();
  // const isMobile = useMediaQuery(WIDTH.MOBILE);
  // const [isOpen, setIsOpen] = useState(false);
  const isWindowScrolled = useIsWindowScrolled()
  const { t } = useLocale();
  const router = useRouter()

  return (
    <Container $isBlack={isBlack ? isBlack : isWindowScrolled}>
      <Left>
        <Logo />
      </Left>
      <Middle>
        <NavLink href='/' locale={router.locale} passHref>{t("component.Header.nav.home")}</NavLink>
        <NavLink href='/shop' locale={router.locale} passHref>{t("component.Header.nav.shop")}</NavLink>
        <NavLink href='/contact' locale={router.locale} passHref>{t("component.Header.nav.contact")}</NavLink>
      </Middle>
      {/* {!isMobile && <Nav />} */}
      <Right>
        {/* <Search /> */}
        {/* <HeartIcon /> */}
        <CartButton />
      </Right>
      {/* {isMobile && <MobileNav isOpen={isOpen} close={() => setIsOpen(false)} />} */}
    </Container>
  );
};

const CartButton = () => {
  const { state: { productInCart }, toggleAsideCart } = useAppState()

  const totalProductQuantity = getTotalProductsQuantity(productInCart)

  return (
    <Button onClick={toggleAsideCart}>
      <ShoppingBagIcon />
      {!!totalProductQuantity && <Badge>{totalProductQuantity}</Badge>}
    </Button>
  )
}

// const SearchIcon = () => (
//   <svg
//     width='20'
//     height='20'
//     viewBox='0 0 20 20'
//     fill='none'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <path
//       d='M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z'
//       stroke='#F8F8F8'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </svg>
// );

type SvgProps = {
  className?: string
}

const ShoppingBagIcon = ({ className }: SvgProps) => (
  <svg
    className={className}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z'
      stroke='#F8F8F8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

// const HeartIcon = ({ className }: SvgProps) => (
//   <svg
//     className={className}
//     width='20'
//     height='17'
//     viewBox='0 0 20 17'
//     fill='none'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <path
//       d='M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z'
//       stroke='white'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </svg>
// );
