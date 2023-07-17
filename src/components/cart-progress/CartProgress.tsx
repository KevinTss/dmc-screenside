import { Icon } from 'src/components/ui';
import { useAppState, useLocale } from 'src/hooks';

import { Container, Title, Right, Left, Button } from './CartProgress.styles';

export const CartProgress = () => {
  const { t } = useLocale();
  const { toggleAsideCart } = useAppState()

  return (
    <Container>
      <Left>
        <Button onClick={toggleAsideCart}>
          <Icon name='cross' />
        </Button>
      </Left>
      <Title>{t('component.CartHeader.title')}</Title>
      <Right />
    </Container>
  );
}
