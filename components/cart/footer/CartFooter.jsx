import { useCart, useLocale } from '../../../hooks';
import { Container } from './style';
import { Button } from '../../ui';

export default function CartFooter() {
  const { t } = useLocale();
  const { data, reset } = useCart();

  const onClick = () => {
    if (!data?.checkoutUrl) return;

    window.open(data.checkoutUrl, '_blank');
  };

  return (
    <Container>
      {!!data?.lines?.length && (
        <>
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
