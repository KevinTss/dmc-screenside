import { EmptyState } from 'src/components/cart-empty-state';
import { ProductCartPreview } from 'src/components/product-cart-preview';
import { useLocale, useCart } from 'src/hooks';
import { getTotalProductsQuantity } from 'src/utils'

import { Container, Title, List } from './CartBody.styles';

export const CartBody = () => {
  const { t } = useLocale();
  const { products } = useCart();

  const totalProducts = getTotalProductsQuantity(products)

  return (
    <Container>
      <Title>
        {t('component.CartBody.title', {
          number: totalProducts,
          plural: totalProducts ? 's' : ''
        })}
      </Title>
      {products.length
        ? (
          <List>
            {products.map(p => <ProductCartPreview key={p.handle} productHandle={p.handle} quantity={p.quantity} />)}
          </List>
        )
        : <EmptyState />}
    </Container>
  );
}
