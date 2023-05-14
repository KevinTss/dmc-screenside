import { Container, Container } from './PageHeader.styles';
import { Heading } from '../ui';

type PageHeaderProps = {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => (
  <Container>
    <Container>
      <Heading>{title}</Heading>
    </Container>
  </Container>
);

