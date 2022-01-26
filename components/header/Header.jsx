import { useState } from 'react';
// import { useRouter } from 'next/router';

import { Header as HeaderEl, Container, RightContainer } from './style';
import { Wrapper } from '../../styles';
// import { useLocale } from '../../hooks';
import Nav from '../nav';
import { Button } from '../ui';
import CardDrawer from '../cart/drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const { push, asPath } = useRouter();
  // const { locale, t } = useLocale();

  return (
    <HeaderEl>
      <Wrapper>
        <Container>
          <Nav />
          <RightContainer>
            <Button
              iconLeft='cart'
              variant='minimal'
              onClick={() => setIsDrawerOpen(true)}
            />
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
      <CardDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </HeaderEl>
  );
};

export default Header;
