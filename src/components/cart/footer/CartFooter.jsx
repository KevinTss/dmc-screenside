import { useCart, useLocale } from '../../../hooks';
import { Container, ErrorMessage } from './style';
import { Button } from '../../ui';
import { useState, useEffect } from 'react';
import { ErrorCode, canGoToCheckout } from '../../../src/utils';

export default function CartFooter() {
  const { t } = useLocale();
  const { data, reset } = useCart();
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [data]);

  const onClick = () => {
    if (!data?.checkoutUrl) return;

    const { ok } = canGoToCheckout(data);
    if (!ok) {
      setError(ErrorCode.ONLY_MULTIPLE_OF_12_ALLOWED);
      return;
    }

    window.open(data.checkoutUrl, '_blank');
  };

  return (
    <Container>
      {!!data?.lines?.length && (
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
      )}
    </Container>
  );
}
