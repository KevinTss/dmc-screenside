import { FooterContainer } from './style';
import { useLocale } from '../../hooks';
import { Text, Link } from '../ui';
import { Wrapper } from '../../styles';

export default function Footer() {
  const { t } = useLocale();

  return (
    <FooterContainer>
      <Wrapper>
        <Text>
          Copyright &copy; {new Date().getFullYear()} DMC{' '}
          {`${t('component.Footer.allRightReserved')} `}
        </Text>
        <Text>
          {`${t('component.Footer.poweredBy')} `}
          <Link href='https://screenside.be/' target='_blank'>
            ScreenSide
          </Link>
        </Text>
      </Wrapper>
    </FooterContainer>
  );
}
