import Image from 'next/image';
import { useAppState, useProduct } from 'src/hooks';

import {
  Container,
  ImageContainer,
  CardBody,
  Name,
  Desc,
  Price,
  CardActions,
  QuantityBox,
  QuantityButton,
} from './ProductCartPreview.styles';
import { Icon } from '../ui';

type ProductCartPreviewProps = {
  productHandle: string,
  quantity: number
}

export const ProductCartPreview = ({ productHandle, quantity }: ProductCartPreviewProps) => {
  const { data } = useProduct(productHandle);
  const { addToCart, removeFromCart } = useAppState()

  if (!data) return null

  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} alt={data.title} layout='fill' />
      </ImageContainer>
      <CardBody>
        <Name>{data.title}</Name>
        <Desc>Beer</Desc>
      </CardBody>
      <CardActions>
        <Price>€{data.price.amount}</Price>
        <QuantityBox>
          <QuantityButton onClick={() => removeFromCart(productHandle)}>
            <Icon name='minus' />
          </QuantityButton>
          <span>{quantity}</span>
          <QuantityButton onClick={() => addToCart(productHandle, Number(data.price.amount))}>
            <Icon name='plus' />
          </QuantityButton>
        </QuantityBox>
      </CardActions>
    </Container>
  );
}
