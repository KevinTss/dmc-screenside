import { ProductsList } from 'src/components/product-list';
import { useProductsFeatured } from 'src/hooks';

import {
  Container,
  Title,
  Cockpit,
} from './HomeFeaturedProductsSection.styles';

export const HomeFeaturedProductsSection = () => {
  const { data } = useProductsFeatured();

  return (
    <Container>
      <Cockpit>
        <Title>Trending this week</Title>
      </Cockpit>
      {!!data.length && <ProductsList products={data} />}
    </Container>
  );
};
