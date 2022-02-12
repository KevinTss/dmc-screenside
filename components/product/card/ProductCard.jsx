import Image from 'next/image';

import { Container, ImageContainer, CardBody, Name, Price } from './style';
import { Button } from '../../ui';
import { useCart, useLocale } from '../../../hooks';

export default function ProductCard({ product }) {
  const { add, isAddLoading } = useCart();
  const { t } = useLocale();

  return (
    <Container>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.title} layout='fill' />
      </ImageContainer>
      <CardBody>
        <Name>{product.title}</Name>
        <Price>€{product.price.amount}</Price>
        <Button isLoading={isAddLoading} onClick={() => add(product)}>
          {t('component.ProductCard.addToCart')}
        </Button>
      </CardBody>
    </Container>
  );
}
