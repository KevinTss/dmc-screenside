import Link from 'next/link';
import Image from 'next/image';

import { AdvertisementContainer, Container, Title, CTA, Overlay } from './HomeHeaderSection.styles';

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
        <CTA href='/shop' locale={locale}>
            {t('component.HomeHeaderSection.cta')}
        </CTA>
      </Container>
    </AdvertisementContainer>
  );
};
