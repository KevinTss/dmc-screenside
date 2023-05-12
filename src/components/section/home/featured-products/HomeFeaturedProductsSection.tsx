// import Link from 'next/link';
import {
  Container,
  Title,
  Cockpit,
} from './HomeFeaturedProductsSection.styles';
import { useProductsFeatured } from 'src/hooks';
import { ProductsList } from 'src/components/product-list';

export const HomeFeaturedProductsSection = () => {
  const { data } = useProductsFeatured();

  return (
    <Container id="hey">
      <Cockpit>
        <Title>Trending this week</Title>
        {/* <Link href='/shop' variant='minimal'>
            View all
          </Link> */}
        </Cockpit>
      {!!data && <ProductsList products={data} />}
    </Container>
  );
};
