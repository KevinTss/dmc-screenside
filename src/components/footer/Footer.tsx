import { useLocale } from 'src/hooks';
import { Col, Row } from 'src/styles';

import { FooterContainer, FooterWrapper, BottomContainer, SubTitle, Text } from './Footer.styles';
// import { Link } from '../ui';

export const Footer = () => {
  const { t } = useLocale();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Row>
          <Col>
            Logo here
          </Col>
          <Col>
            <SubTitle>Address</SubTitle>
            <Text>
              Rue Vanderkindere 404
              <br />
              1180 Ucclefig
              <br />
              Belgium
            </Text>
            <SubTitle>Horaires</SubTitle>
            <Text>
              Lundi - Vendredi: 9:00 - 19:00
              <br />
              Samedi: Sur réservation
              <br />
              Dimanche: Fermé
            </Text>
          </Col>
        </Row>
        <Row>
          <BottomContainer>
            <Text>
              Copyright &copy; {new Date().getFullYear()} DMC{' '}
              {`${t('component.Footer.allRightReserved')} `}
            </Text>
            {/* <Text>
            {`${t('component.Footer.poweredBy')} `}
            <Link href='https://screenside.be/' target='_blank'>
            ScreenSide
            </Link>
          </Text> */}
          </BottomContainer>
        </Row>
      </FooterWrapper>
    </FooterContainer>
  );
}
