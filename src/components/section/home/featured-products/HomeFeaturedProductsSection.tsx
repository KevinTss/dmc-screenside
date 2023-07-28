import {
  Container,
  Title,
  Cockpit,
} from './HomeFeaturedProductsSection.styles';
import { ProductsList } from '../../../../components/product-list';
import { useProductsFeatured } from '../../../../hooks';


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
