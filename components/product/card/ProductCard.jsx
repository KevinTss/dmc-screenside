import Image from 'next/image';

import { Container, ImageContainer, CardBody, Name, Price } from './style';
import { Button } from '../../ui';

const ProductCard = ({ product }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.title} layout='fill' />
      </ImageContainer>
      <CardBody>
        <Name>{product.title}</Name>
        <Price>€{product.price.amount}</Price>
        <Button>Add to card</Button>
      </CardBody>
    </Container>
  );
};

export default ProductCard;
