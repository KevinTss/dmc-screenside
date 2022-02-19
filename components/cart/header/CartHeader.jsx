import { useLocale } from '../../../hooks';
import { Container, Title } from './style';

export default function CartHeader() {
  const { t } = useLocale();

  return (
    <Container>
      <Title>{t('component.CartHeader.title')}</Title>
    </Container>
  );
}
