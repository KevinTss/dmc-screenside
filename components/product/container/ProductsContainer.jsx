import { MainContainer, ItemContainer } from './style';

import ProductCard from '../card';
import { Section } from '../../../styles';

const ProductsList = ({ products }) => {
  return (
    <Section>
      <MainContainer>
        {products.map((product) => (
          <ItemContainer key={product.id}>
            <ProductCard product={product} />
          </ItemContainer>
        ))}
      </MainContainer>
    </Section>
  );
};

export default ProductsList;
