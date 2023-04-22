import Link from 'next/link';

import { Container, Title, Cockpit } from './style';
import { useFeaturedProducts } from '../../../../hooks';
import { Wrapper } from '../../../../styles';
import ProductsList from '../../../product/container';

export default function HomeFeaturedProductsSection() {
  const { data } = useFeaturedProducts();

  return (
    <Wrapper>
      <Container>
        <Cockpit>
          <Title>Featured products</Title>
          <Link href='/shop' variant='minimal'>
            View all
          </Link>
        </Cockpit>
        {!!data && <ProductsList products={data} />}
      </Container>
    </Wrapper>
  );
}
