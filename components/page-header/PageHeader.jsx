import { PageHeader as PageHeaderEl, Container } from './style';
import { Wrapper } from '../../styles';
import { Heading } from '../ui';

export default function PageHeader({ title }) {
  return (
    <PageHeaderEl>
      <Wrapper>
        <Container>
          <Heading>{title}</Heading>
        </Container>
      </Wrapper>
    </PageHeaderEl>
  );
}
