import Link from 'next/link';

import { AdvertisementContainer, ButtonContainer, Image } from './style';
import { Button, Overlay } from '../../../ui';
import { useLocale } from '../../../../hooks';
import { Wrapper } from '../../../../styles';
import backgroundUrl from '../../../../assets/background-advertisement.png';

export default function HomeHeaderSection() {
  const { locale, t } = useLocale();

  return (
    <Wrapper>
      <AdvertisementContainer>
        <Image src={backgroundUrl.src} alt='background-image' />
        <Overlay />
        <ButtonContainer>
          <Link href='/shop' locale={locale} passHref>
            <Button as='a' variant='primary'>
              {t('component.HomeHeaderSection.cta')}
            </Button>
          </Link>
        </ButtonContainer>
      </AdvertisementContainer>
    </Wrapper>
  );
}
