import Link from 'next/link';
import Image from 'next/image';

import {
  AdvertisementContainer,
  ButtonContainer,
  // Image as ImageSt,
} from './style';
import { Button, Overlay } from '../../../ui';
import { useLocale } from '../../../../hooks';
import { Wrapper } from '../../../../styles';
// import backgroundUrl from '../../../../assets/background-advertisement.png';
import backgroundUrl2 from '../../../../assets/test.png';
// import url from '../../../../assets/';

export default function HomeHeaderSection() {
  const { locale, t } = useLocale();

  return (
    <Wrapper>
      <AdvertisementContainer>
        <Image
          // src='/background-advertisement.png'
          src={backgroundUrl2.src}
          layout='fill'
          alt='background-image'
        />
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
