import { MainContainer, ItemContainer } from './style';

import ProductCard from '../card';
import { Section } from '../../../styles';

export default function ProductsList({ products }) {
  return (
    <Section>
      <MainContainer>
        {products.map((product) => (
          <ItemContainer key={product.handle}>
            <ProductCard product={product} />
          </ItemContainer>
        ))}
      </MainContainer>
    </Section>
  );
};
