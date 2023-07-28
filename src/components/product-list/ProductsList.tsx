import { MainContainer, ItemContainer } from './ProductsList.styles';
import { Product } from '../../types';
import { ProductCard } from '../product-card';

type ProductListProps = {
  products: (Product & { cursor?: string })[]
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
