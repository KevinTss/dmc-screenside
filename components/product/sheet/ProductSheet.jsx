import Image from 'next/image';

import { Container, ImageContainer, Body, Title, Name, Price } from './style';
import { Button } from '../../ui';
import { useCart, useLocale } from '../../../hooks';
import { Wrapper } from '../../../styles';

export default function ProductSheet({ product }) {
  const { add, isAddLoading, open } = useCart();
  const { t } = useLocale();

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.title} layout='fill' />
        </ImageContainer>
        <Body>
          <Title>{product.title}</Title>
          <Name>{product.description}</Name>
          <Price>€{product.price.amount}</Price>
          <Button
            isLoading={isAddLoading}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              add(product);
              open();
            }}
          >
            {t('component.ProductCard.addToCart')}
          </Button>
        </Body>
      </Container>
    </Wrapper>
  );
}
