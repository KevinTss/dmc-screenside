import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { Product } from 'src/types';

import { Container, ImageContainer, CardBody, Name, Price } from './ProductCard.styles';
import { useCart, useLocale } from '../../hooks';
import { Button } from '../ui';


type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  // const { add, isAddLoading, open } = useCart();
  const { t } = useLocale();

  return (
    <Link href={`/shop/${product.handle}`} passHref>
      <Container>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.title} fill />
        </ImageContainer>
        <CardBody>
          <Name>{product.title}</Name>
          <Price>€{product.price}</Price>
          <Button
            // isLoading={isAddLoading}
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              // add(product);
              // open();
            }}
          >
            {t('component.ProductCard.addToCart')}
          </Button>
        </CardBody>
      </Container>
    </Link>
  );
}
