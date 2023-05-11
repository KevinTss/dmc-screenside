// import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  Header as HeaderEl,
  Left,
  Middle,
  Right,
  SearchContainer,
  Input,
} from './Header.styles';
import { Wrapper } from '../../styles';
// import { useLocale } from '../../hooks';
import Nav from '../nav';
import { Button, Logo } from '../ui';
import CardDrawer from '../cart/drawer';
import { useCart, WIDTH, useMediaQuery } from '../../hooks';
import MobileNav from '../mobile-nav';

export const Header = () => {
  // const { open } = useCart();
  const isMobile = useMediaQuery(WIDTH.MOBILE);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderEl>
      <Left>
        <Logo />
      </Left>
      <Middle></Middle>
      {/* {!isMobile && <Nav />} */}
      <Right>
        {/* <Search /> */}
        <HeartIcon />
        <ShoppingBagIcon />
      </Right>
      {/* <CardDrawer /> */}
      {/* {isMobile && <MobileNav isOpen={isOpen} close={() => setIsOpen(false)} />} */}
    </HeaderEl>
  );
};

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <Input />
    </SearchContainer>
  );
};

const SearchIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z'
      stroke='#F8F8F8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
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

const HeartIcon = () => (
  <svg
    width='20'
    height='17'
    viewBox='0 0 20 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
