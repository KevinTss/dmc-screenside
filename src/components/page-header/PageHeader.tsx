import Image from 'next/image';
import backgroundImage from 'src/assets/background.jpg'

// const backgroundUrl2 = require('../../../../assets/background.jpg')

import { Container, TitleWrapper, H1 } from './PageHeader.styles';
import { Heading } from '../ui';

type PageHeaderProps = {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => (
  <Container>
    <Image src={backgroundImage.src} alt='background-image' fill />
    <TitleWrapper>
      <H1>{title}</H1>
    </TitleWrapper>
  </Container>
);

