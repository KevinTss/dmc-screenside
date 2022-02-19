import Image from 'next/image';
import Link from 'next/link';

import { AdvertisementContainer, ButtonContainer } from './style';
import { Button, Overlay } from '../../../ui';
import { useLocale } from '../../../../hooks';
import { Wrapper } from '../../../../styles';
import backgroundUrl from '../../../../assets/background-advertisement.png';

export default function HomeHeaderSection() {
  const { locale, t } = useLocale();

  return (
    <Wrapper>
      <AdvertisementContainer>
        <Image
          src={backgroundUrl}
          alt='background-image'
          width='100%'
          height='100%'
          layout='fill'
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
