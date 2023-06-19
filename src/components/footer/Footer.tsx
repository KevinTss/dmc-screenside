import { useRouter } from 'next/router'
import { Logo } from 'src/components/ui/logo'
import { useLocale } from 'src/hooks';
import { Col, Row } from 'src/styles';

import { FooterContainer, FooterWrapper, BottomContainer, SubTitle, Text, NavLink } from './Footer.styles';

export const Footer = () => {
  const { t } = useLocale();
  const router = useRouter()

  return (
    <FooterContainer>
      <FooterWrapper>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col>
            <SubTitle>Address</SubTitle>
            <Text>
              Rue Vanderkindere 404
              <br />
              1180 Uccle
              <br />
              Belgium
            </Text>
          </Col>
          <Col>
            <SubTitle>Opening hours</SubTitle>
            <Text>
              Monday - Friday: 9:00 - 19:00
              <br />
              Saturday: Booking only
              <br />
              Sunday: Closed
            </Text>
          </Col>
          <Col>
            <SubTitle>Online shop</SubTitle>
            <Text>
              <NavLink href='/' locale={router.locale} passHref>{t("component.Header.nav.home")}</NavLink>
              <NavLink href='/shop' locale={router.locale} passHref>{t("component.Header.nav.shop")}</NavLink>
              <NavLink href='/contact' locale={router.locale} passHref>{t("component.Header.nav.contact")}</NavLink>
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
