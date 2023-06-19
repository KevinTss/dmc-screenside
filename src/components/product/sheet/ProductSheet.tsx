import Image from 'next/image';
import { Button } from 'src/components/ui';
import { useCart, useLocale } from 'src/hooks';
import { Product } from 'src/types';

import { Container, ImageContainer, Body, Title, Name, Price } from './ProductSheet.styles';

type ProductSheetProps = {
  product: Product
}

export const ProductSheet = ({ product }: ProductSheetProps) => {
  // const { add, isAddLoading, open } = useCart();
  const { t } = useLocale();
  console.log('product', product)
  return (

    <Container>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.title} layout='fill' />
      </ImageContainer>
      <Body>
        <Title>{product.title}</Title>
        <Name>{product.description}</Name>
        <Price>€{product.price.amount}</Price>
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
      </Body>
    </Container>

  );
}
