import Image from 'next/image';

import { Container, ImageContainer, CardBody, Name, Price } from './style';
import { Button } from '../../ui';

const ProductCard = ({ product }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src='/assets/jambe-de-bois.png'
          alt={product.name}
          width={240}
          height={300}
        />
      </ImageContainer>
      <CardBody>
        <Name>{product.name}</Name>
        <Price>€{product.price}</Price>
        <Button>Add to card</Button>
      </CardBody>
    </Container>
  );
};

export default ProductCard;
