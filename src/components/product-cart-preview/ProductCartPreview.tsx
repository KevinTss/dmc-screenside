import Image from 'next/image';
import { useLocale, useProduct } from 'src/hooks';

import {
  Container,
  ImageContainer,
  CardBody,
  Name,
  Price,
  CardActions,
  Quantity,
  TotalPrice,
} from './ProductCartPreview.styles';
import { Button } from '../ui';

type ProductCartPreviewProps = {
  productHandle: string,
  quantity: number
}

export const ProductCartPreview = ({ productHandle, quantity }: ProductCartPreviewProps) => {
  const { t } = useLocale();
  const { data } = useProduct(productHandle);

  // const quantity = cartItem?.node?.quantity || 0;
  // const unitPrice = data?.price?.amount || 0;
  // const totalItemPrice = quantity * unitPrice;

  if (!data) return null

  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} alt={data.title} layout='fill' />
      </ImageContainer>
      <CardBody>
        <Name>{data.title}</Name>
        <Price>€{data.price.amount}</Price>
        {/* <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(cartItem);
          }}
        >
          {t('component.ProductCartPreview.quantity')}
        </Button> */}
      </CardBody>
      <CardActions>
        {/* <TotalPrice>€{totalItemPrice}</TotalPrice> */}
        <Quantity>
          {/* {t('component.ProductCartPreview.quantity')}:{' '} */}
          {quantity}
        </Quantity>
      </CardActions>
    </Container>
  );
}
