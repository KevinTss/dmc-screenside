// import { useState, useEffect } from 'react';
import { EmptyState } from 'src/components/cart-empty-state';
import { ProductCartPreview } from 'src/components/product-cart-preview';
import { useLocale, useCart } from 'src/hooks';

import { Container, List } from './CartBody.styles';
// import { ErrorCode, canGoToCheckout } from '../../utils';
// import { Button } from '../ui';

export const CartBody = () => {
  const { t } = useLocale();
  const { products } = useCart();
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   setError('');
  // }, [data]);

  // const onClick = () => {
  //   if (!data?.checkoutUrl) return;

  //   const { ok } = canGoToCheckout(data);
  //   if (!ok) {
  //     setError(ErrorCode.ONLY_MULTIPLE_OF_12_ALLOWED);
  //     return;
  //   }

  //   window.open(data.checkoutUrl, '_blank');
  // };

  return (
    <Container>
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
