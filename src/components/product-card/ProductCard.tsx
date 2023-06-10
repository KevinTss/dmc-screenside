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
  /**
   * https://nextjs.org/docs/pages/api-reference/components/image#priority
   */
  isImagePriority?: boolean
}

export const ProductCard = ({ product, isImagePriority = false }: ProductCardProps) => (
  <Container href={`/shop/${product.handle}`} passHref>
    <ImageContainer>
      <Image src={product.imageUrl} alt={product.title} fill priority={isImagePriority} />
    </ImageContainer>
    <CardBody>
      <Name>{product.title}</Name>
      <RowBottom>
        <Price>€{product.price.amount}</Price>
        <Category>Beer</Category>
      </RowBottom>
    </CardBody>
  </Container>
);
