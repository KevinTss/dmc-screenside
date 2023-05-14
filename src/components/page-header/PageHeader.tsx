import { Container, Container1 } from './PageHeader.styles';
import { Heading } from '../ui';

type PageHeaderProps = {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => (
  <Container>
    <Container1>
      <Heading>{title}</Heading>
    </Container1>
  </Container>
);

