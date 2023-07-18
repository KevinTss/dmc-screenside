import { Button } from 'src/components/product-card/ProductCard.styles';
import { useLocale, useCart } from 'src/hooks';
import { getTotalProductsPrice, canGoToCheckout } from 'src/utils'

import { Container, Top, Bottom } from './CartFooter.styles';

export const CartFooter = () => {
  const { t } = useLocale();
  const { products } = useCart();

  return (
    <Container>
      <Top>
        <span>
          {t('component.CartFooter.label')}
        </span>
        <span>
          €{getTotalProductsPrice(products)}
        </span>
      </Top>
      <Bottom>
        <Button disabled={!canGoToCheckout(products)}>
          {t('component.CartFooter.cta')}
        </Button>
      </Bottom>
    </Container>
  );
}
