import Image from 'next/image';

import { AdvertisementContainer, Container, Title, CTA, Overlay } from './HomeHeaderSection.styles';
import backgroundImage from '../../../../assets/background.jpg'
import { useLocale } from '../../../../hooks'



export const HomeHeaderSection = () => {
  const { locale, t } = useLocale();

  return (
    <AdvertisementContainer>
      <Image src={backgroundImage.src} alt='background-image' fill />
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
