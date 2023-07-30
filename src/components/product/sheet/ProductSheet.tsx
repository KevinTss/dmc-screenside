import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLocale, useAppState } from 'src/hooks';
import { Product } from 'src/types';

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
  ButtonsGroup,
  Button,
  ButtonSecondary,
} from './ProductSheet.styles';

type ProductSheetProps = {
  product: Product
}

export const ProductSheet = ({ product }: ProductSheetProps) => {
  const { t } = useLocale();
  const { addToCart } = useAppState()
  const router = useRouter()

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
          <Description>
            {t('component.ProductSheet.minArticle')}
          </Description>
          <Separator />
          <ButtonsGroup>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product.handle, 1, product.variantId)
            }}
            >
            {t('component.ProductSheet.addToCart')}
          </Button>
            <ButtonSecondary
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push('/shop')
              }}
            >
              {t('component.ProductSheet.backToShop')}
            </ButtonSecondary>
          </ButtonsGroup>
        </Content>
      </Body>
    </Container>
  );
}
