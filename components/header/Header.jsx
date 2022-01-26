import { useRouter } from 'next/router';

import { Header as HeaderEl, Container, RightContainer } from './style';
import { Wrapper } from '../../styles';
import { useLocale } from '../../hooks';
import Nav from '../nav';

const Header = () => {
  const { push, asPath } = useRouter();
  const { locale, t } = useLocale();

  return (
    <HeaderEl>
      <Wrapper>
        <Container>
          <Nav />
          <RightContainer>ok</RightContainer>
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
    </HeaderEl>
  );
};

export default Header;
