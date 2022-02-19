import { useLocale } from '../../../hooks';
import { Container } from './style';
import { Button } from '../../ui';

export default function CartFooter() {
  const { t } = useLocale();

  return (
    <Container>
      <Button variant='primary'>{t('component.CartFooter.cta')}</Button>
    </Container>
  );
}
