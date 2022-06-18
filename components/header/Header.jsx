// import { useRouter } from 'next/router';
import { useState } from 'react';

import { Header as HeaderEl, Container, RightContainer } from './style';
import { Wrapper } from '../../styles';
// import { useLocale } from '../../hooks';
import Nav from '../nav';
import { Button, Logo } from '../ui';
import CardDrawer from '../cart/drawer';
import { useCart, WIDTH, useMediaQuery } from '../../hooks';
import MobileNav from '../mobile-nav';

const Header = () => {
  const { open } = useCart();
  const isMobile = useMediaQuery(WIDTH.MOBILE);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderEl>
      <Wrapper>
        <Container>
          <Logo />
          {!isMobile && <Nav />}
          <RightContainer>
            <Button iconLeft='cart' variant='minimal' onClick={open} />
            {isMobile && (
              <Button
                iconLeft='list'
                variant='minimal'
                onClick={() => setIsOpen(true)}
              />
            )}
          </RightContainer>
          {/* <div>
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
      </div> */}
        </Container>
      </Wrapper>
      <CardDrawer />
      {isMobile && <MobileNav isOpen={isOpen} close={() => setIsOpen(false)} />}
    </HeaderEl>
  );
};

export default Header;
