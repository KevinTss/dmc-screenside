import { ProductCard } from 'src/components';
import { Product } from 'src/types';

import { MainContainer, ItemContainer } from './ProductsList.styles';

type ProductListProps = {
  products: Product[]
}

export const ProductsList = ({ products }: ProductListProps) => (
  <MainContainer>
    {products.map((product, index) => (
      <ItemContainer key={product.handle}>
        <ProductCard product={product} isImagePriority={index < 4} />
      </ItemContainer>
    ))}
  </MainContainer>
);
