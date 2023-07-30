import Image from 'next/image';
import { useLocale } from 'src/hooks'

import { AdvertisementContainer, Container, Title, CTA, Overlay } from './HomeHeaderSection.styles';

export const HomeHeaderSection = () => {
  const { locale, t } = useLocale();

  return (
    <AdvertisementContainer>
      <Image src={'/background-advertisement.png'} alt='background-image' fill />
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
