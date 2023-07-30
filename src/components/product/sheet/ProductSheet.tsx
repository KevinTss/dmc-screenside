import Image from 'next/image';

import {
  Container,
  ImageContainer,
  Body,
  Title,
  Description,
  Price,
  BreadcrumbsContainer,
  Content,
  Separator,
  Button
} from './ProductSheet.styles';
import { useLocale, useAppState } from '../../../hooks';
import type { Product } from '../../../types';


type ProductSheetProps = {
  product: Product
}

export const ProductSheet = ({ product }: ProductSheetProps) => {
  const { t } = useLocale();
  const { addToCart } = useAppState()

  return (
    <Container>
      <BreadcrumbsContainer>
        Beers / <b>{product.title}</b>
      </BreadcrumbsContainer>
      <Body>
      <ImageContainer>
          <Image src={product.imageUrl || ''} alt={product.title} layout='fill' />
      </ImageContainer>
        <Content>
          <Title>
            {product.title}
          </Title>
          <Description>
            {product.description}
          </Description>
          <Separator />
          <Price>
            €{product.price.amount}
          </Price>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product.handle, 1, product.variantId)
            }}
          >
            {t('component.ProductSheet.addToCart')}
          </Button>
        </Content>
      </Body>
    </Container>

  );
}
