import Image from 'next/image';

import { AdvertisementContainer, ButtonContainer } from './style';
import { Button, Overlay } from '../../../ui';
import { useLocale } from '../../../../hooks';
import { Wrapper } from '../../../../styles';
import backgroundUrl from '../../../../assets/background-advertisement.png';

export default function HomeHeaderSection() {
  const { t } = useLocale();

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
          <Button variant='primary'>
            {t('component.HomeHeaderSection.cta')}
          </Button>
        </ButtonContainer>
      </AdvertisementContainer>
    </Wrapper>
  );
}
