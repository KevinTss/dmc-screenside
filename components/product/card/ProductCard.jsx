import Image from 'next/image';
import Link from 'next/link';

import { Container, ImageContainer, CardBody, Name, Price } from './style';
import { Button } from '../../ui';
import { useCart, useLocale } from '../../../hooks';

export default function ProductCard({ product }) {
  const { add, isAddLoading } = useCart();
  const { t } = useLocale();

  return (
    <Link href={`/shop/${product.handle}`} passHref>
      <Container>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.title} layout='fill' />
        </ImageContainer>
        <CardBody>
          <Name>{product.title}</Name>
          <Price>€{product.price.amount}</Price>
          <Button
            isLoading={isAddLoading}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              add(product);
            }}
          >
            {t('component.ProductCard.addToCart')}
          </Button>
        </CardBody>
      </Container>
    </Link>
  );
}
