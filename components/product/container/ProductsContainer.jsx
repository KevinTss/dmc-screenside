import { Container, ItemContainer } from './style';

import ProductCard from '../card/';

const ProductsList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <ItemContainer key={product.id}>
          <ProductCard product={product} />
        </ItemContainer>
      ))}
    </Container>
  );
};

export default ProductsList;
