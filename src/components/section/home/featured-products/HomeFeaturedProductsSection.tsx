// import Link from 'next/link';
import {
  Container,
  Title,
  Cockpit,
} from './HomeFeaturedProductsSection.styles';
// import { useFeaturedProducts } from '../../../../hooks';
// import ProductsList from '../../../product/container';

export const HomeFeaturedProductsSection = () => {
  // const { data } = useFeaturedProducts();

  return (
    <Container id="hey">
      <Cockpit>
        <Title>Trending this week</Title>
        {/* <Link href='/shop' variant='minimal'>
            View all
          </Link> */}
        </Cockpit>
      {/* {!!data && <ProductsList products={data} />} */}
    </Container>
  );
};
