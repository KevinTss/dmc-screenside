import Link from 'next/link';
import Image from 'next/image';

import { AdvertisementContainer, Container, Title } from './style';
import { Button, Overlay } from '../../../ui';
import { useLocale } from '../../../../hooks';
import backgroundUrl2 from '../../../../assets/background.jpg';
console.log('backgroundUrl2', backgroundUrl2);

export default function HomeHeaderSection() {
  const { locale, t } = useLocale();

  return (
    <AdvertisementContainer>
      <Image src={backgroundUrl2.src} layout='fill' alt='background-image' />
      <Overlay />
      <Container>
        <Title>{t('component.HomeHeaderSection.title')}</Title>
        <Link href='/shop' locale={locale} passHref>
          <Button as='a' variant='primary'>
            {t('component.HomeHeaderSection.cta')}
          </Button>
        </Link>
      </Container>
    </AdvertisementContainer>
  );
}
