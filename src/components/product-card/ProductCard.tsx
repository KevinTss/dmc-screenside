import { Icon } from 'src/components/ui'
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
        {product.imageUrl
          ? <Image src={product.imageUrl} alt={product.title} fill priority={isImagePriority} />
          : <Icon name='image' />}
    </ImageContainer>
    <CardBody>
      <Name>{product.title}</Name>
      <RowBottom>
          <Price>€{Number(product.price.amount)}</Price>
        <Category>Beer</Category>
      </RowBottom>
        <RowBottom>
          <Button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addToCart(product.handle, Number(product.price.amount), product.variantId)
            }}
          >
            Add to cart
          </Button>
        </RowBottom>
    </CardBody>
  </Container>
);
}
