import { Button } from 'src/components/product-card/ProductCard.styles';
import { useLocale, useCart, useShopifyCartCreate } from 'src/hooks';
import { getTotalProductsPrice, canGoToCheckout } from 'src/utils'

import { Container, Top, Bottom } from './CartFooter.styles';

export const CartFooter = () => {
  const { t } = useLocale();
  const { products } = useCart();
  const { create, isLoading } = useShopifyCartCreate({
    onSuccess: (_cartId, checkoutUrl) => {
      window.open(checkoutUrl, '_blank')
      /**
       * @todo
       * Store cardId in local storage
       */
    }
  })

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
        <Button
          disabled={!canGoToCheckout(products)}
          onClick={() => create(products.map(p => ({
            merchandiseId: p.variantId,
            quantity: p.quantity
          })))}
        >
          {isLoading ? t('common.loading') : t('component.CartFooter.cta')}
        </Button>
      </Bottom>
    </Container>
  );
}
