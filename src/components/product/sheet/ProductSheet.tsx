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
  Separator
} from './ProductSheet.styles';
import { useCart, useLocale } from '../../../hooks';
import type { Product } from '../../../types';
import { Button } from '../../ui';


type ProductSheetProps = {
  product: Product
}

export const ProductSheet = ({ product }: ProductSheetProps) => {
  // const { add,  isAddLoading, open} = useCart();
  const { t } = useLocale();
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
        {/* <Button
            isLoading={false}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // add(product);
              // open();
            }}
          >
            {t('component.ProductCard.addToCart')}
          </Button> */}
        </Content>
      </Body>
    </Container>

  );
}
