import { Container, Title, List } from './CartBody.styles';
import { EmptyState } from '../../components/cart-empty-state';
import { ProductCartPreview } from '../../components/product-cart-preview';
import { useLocale, useCart } from '../../hooks';
import { getTotalProductsQuantity } from '../../utils'


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
            {products.map(p => <ProductCartPreview key={p.handle} productHandle={p.handle} quantity={p.quantity} variantId={p.variantId} />)}
          </List>
        )
        : <EmptyState />}
    </Container>
  );
}
