import Image from 'next/image';
import backgroundImage from 'src/assets/background.jpg'
import { useLocale } from 'src/hooks'

import { Wrapper, Container, Title, Description, CTA } from './HomePresentationSection.styles';


export const HomePresentationSection = () => {
  const { locale, t } = useLocale();

  return (
    <Container>
      <Wrapper>
        <div>
          <Title>{t('component.HomePresentationSection.title')}</Title>
          <Description>{t('component.HomePresentationSection.description')}</Description>
          <CTA href='/shop' locale={locale}>
            {t('component.HomePresentationSection.cta')}
          </CTA>
        </div>
        <div>
          <Image src={backgroundImage.src} alt='background-image' fill />
        </div>
      </Wrapper>
    </Container>
  );
};
