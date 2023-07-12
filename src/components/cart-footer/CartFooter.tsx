// import { useState, useEffect } from 'react';
import { Button } from 'src/components/product-card/ProductCard.styles';
import { useLocale, useCart } from 'src/hooks';
import { getTotalProductsPrice } from 'src/utils'

import { Container, Top, Bottom } from './CartFooter.styles';
// import { ErrorCode, canGoToCheckout } from '../../utils';

export const CartFooter = () => {
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
      <Top>
        <span>
          Total (Tax included)
        </span>
        <span>
          €{getTotalProductsPrice(products)}
        </span>
      </Top>
      <Bottom>
        <Button>
          Order
        </Button>
      </Bottom>
      {/* {!!data?.lines?.length && (
        <>
          {!!error && (
            <ErrorMessage>
              You must buy in quantities of 12 products.
              <br />
              Example: 12, 24, 36,...
            </ErrorMessage>
          )}
          <Button variant='primary' onClick={onClick}>
            {t('component.CartFooter.proceed')}
          </Button>
          <Button variant='minimal' onClick={reset}>
            {t('component.CartFooter.resetCart')}
          </Button>
        </>
      )} */}
    </Container>
  );
}
