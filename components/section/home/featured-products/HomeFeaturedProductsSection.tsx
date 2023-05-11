import Link from 'next/link';
import {
  Container,
  Title,
  Cockpit,
} from './HomeFeaturedProductsSection.styles';
import { useFeaturedProducts } from '../../../../hooks';
import { Wrapper } from '../../../../styles';
import ProductsList from '../../../product/container';

export const HomeFeaturedProductsSection = () => {
  const { data } = useFeaturedProducts();

  return (

    <Wrapper>
      <Container>ok
        {/* <Cockpit>
          <Title>Featured products</Title>
          <Link href='/shop' variant='minimal'>
            View all
          </Link>
        </Cockpit>
        {!!data && <ProductsList products={data} />} */}
      </Container>
    </Wrapper>
  );
};
