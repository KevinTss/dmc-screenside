import Image from 'next/image';

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
import { useAppState, useProduct } from '../../hooks';
import { Icon } from '../ui'



type ProductCartPreviewProps = {
  productHandle: string,
  quantity: number
  variantId: string
}

export const ProductCartPreview = ({ productHandle, quantity, variantId }: ProductCartPreviewProps) => {
  const { data } = useProduct(productHandle);
  const { addToCart, removeFromCart } = useAppState()

  if (!data) return null

  return (
    <Container>
      <ImageContainer>
        {data.imageUrl
          ? <Image src={data.imageUrl} alt={data.title} layout='fill' />
          : <Icon name='image' />}
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
          <QuantityButton onClick={() => addToCart(productHandle, Number(data.price.amount), variantId)}>
            <Icon name='plus' />
          </QuantityButton>
        </QuantityBox>
      </CardActions>
    </Container>
  );
}
