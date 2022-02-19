import { useCart, useLocale } from '../../../hooks';
import { Container } from './style';
import { Button } from '../../ui';

export default function CartFooter() {
  const { t } = useLocale();
  const { data, reset } = useCart();

  return (
    <Container>
      {!!data?.lines?.length && (
        <>
          <Button variant='primary'>{t('component.CartFooter.proceed')}</Button>
          <Button variant='minimal' onClick={reset}>
            {t('component.CartFooter.resetCart')}
          </Button>
        </>
      )}
    </Container>
  );
}
