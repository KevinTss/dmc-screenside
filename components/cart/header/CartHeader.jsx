import { useLocale } from '../../../hooks';
import { Container, Title, SubTitle } from './style';

export default function CartHeader({ totalProduct }) {
  const { t } = useLocale();

  return (
    <Container>
      <Title>{t('component.CartHeader.title')}</Title>
      <SubTitle>Total product: {totalProduct}</SubTitle>
    </Container>
  );
}
