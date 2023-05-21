import { Product } from 'src/types';

import {
  CardBody,
  Category,
  Container,
  Image,
  ImageContainer,
  Name,
  Price,
  RowBottom,
} from './ProductCard.styles';

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <Container href={`/shop/${product.handle}`} passHref>
    <ImageContainer>
      <Image src={product.imageUrl} alt={product.title} fill />
    </ImageContainer>
    <CardBody>
      <Name>{product.title}</Name>
      <RowBottom>
        <Price>€{product.price}</Price>
        <Category>Beer</Category>
      </RowBottom>
    </CardBody>
  </Container>
);
