import Link from 'next/link';
import Image from 'next/image';

import { AdvertisementContainer, Container, Title } from './HomeHeaderSection.styles';

const { Button, Overlay } = require('../../../ui');
const { useLocale } = require('../../../../hooks')
const backgroundUrl2 = require('../../../../assets/background.jpg')

export const HomeHeaderSection = () => {
  const { locale, t } = useLocale();

  return (
    <AdvertisementContainer>
      <Image src={backgroundUrl2.default.src} alt='background-image' fill />
      <Overlay />
      <Container>
        <Title>{t('component.HomeHeaderSection.title')}</Title>
        <Link href='/shop' locale={locale} passHref>
          <Button as='span' variant='primary'>
            {t('component.HomeHeaderSection.cta')}
          </Button>
        </Link>
      </Container>
    </AdvertisementContainer>
  );
};
