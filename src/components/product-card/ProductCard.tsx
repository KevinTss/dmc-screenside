import { useAppState } from 'src/hooks';
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
  Button
} from './ProductCard.styles';

type ProductCardProps = {
  product: Product
  /**
   * https://nextjs.org/docs/pages/api-reference/components/image#priority
   */
  isImagePriority?: boolean
}

export const ProductCard = ({ product, isImagePriority = false }: ProductCardProps) => {
  const { addToCart } = useAppState()

  return (
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
        <RowBottom>
          <Button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addToCart(product.handle)
          }}>Add to cart</Button>
        </RowBottom>
    </CardBody>
  </Container>
);
}
