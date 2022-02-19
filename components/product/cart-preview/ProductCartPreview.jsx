import Image from 'next/image';

import {
  Container,
  ImageContainer,
  CardBody,
  Name,
  Price,
  CardActions,
  Quantity,
  TotalPrice,
} from './style';
import { Button } from '../../ui';
import { useLocale, useProduct } from '../../../hooks';

export default function ProductCartPreview({ cartItem }) {
  const { t } = useLocale();
  const { data } = useProduct(cartItem?.node?.merchandise?.product?.handle);

  const quantity = cartItem?.node?.quantity || 0;
  const unitPrice = data?.price?.amount || 0;
  const totalItemPrice = quantity * unitPrice;

  return (
    <Container>
      <ImageContainer>
        {data?.imageUrl && (
          <Image src={data?.imageUrl} alt={data?.title} layout='fill' />
        )}
      </ImageContainer>
      <CardBody>
        <Name>{data?.title}</Name>
        <Price>€{data?.price?.amount}</Price>
        <Quantity>
          {t('component.ProductCartPreview.quantity')}:{' '}
          {cartItem?.node?.quantity}
        </Quantity>
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
        <TotalPrice>€{totalItemPrice}</TotalPrice>
      </CardActions>
    </Container>
  );
}
