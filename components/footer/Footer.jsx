import { FooterContainer, BottomContainer } from './style';
import { useLocale } from '../../hooks';
import { Text, Link } from '../ui';
import { Wrapper, Col, Row } from '../../styles';

export default function Footer() {
  const { t } = useLocale();

  return (
    <FooterContainer>
      <Wrapper gap={20}>
        <Row>
          <Col>
            <Text>Table Brussels</Text>
            <br />
            <Text>
              Rue Vanderkindere 404
              <br />
              1180 Uccle
              <br />
              Belgium
            </Text>
          </Col>
          <Col>
            <Text>Horaires</Text>
            <br />
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
      </Wrapper>
    </FooterContainer>
  );
}
