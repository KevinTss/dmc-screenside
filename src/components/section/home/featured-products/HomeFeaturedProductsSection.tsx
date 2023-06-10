import { ProductsList } from 'src/components/product-list';
import { useProductsFeatured } from 'src/hooks';

import {
  Container,
  Title,
  Cockpit,
} from './HomeFeaturedProductsSection.styles';

export const HomeFeaturedProductsSection = () => {
  const { products } = useProductsFeatured();

  return (
    <Container id="hey">
      <Cockpit>
        <Title>Trending this week</Title>
      </Cockpit>
      {!!products.length && <ProductsList products={products} />}
    </Container>
  );
};
