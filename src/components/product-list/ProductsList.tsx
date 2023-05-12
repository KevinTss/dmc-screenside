import { MainContainer, ItemContainer } from './ProductsList.styles';
import { Product } from 'src/types';

import { ProductCard } from 'src/components';

type ProductListProps = {
  products: Product[]
}

export const ProductsList = ({ products }: ProductListProps) => (
  <MainContainer>
    {products.map((product) => (
      <ItemContainer key={product.id}>
        <ProductCard product={product} />
      </ItemContainer>
    ))}
  </MainContainer>
);
