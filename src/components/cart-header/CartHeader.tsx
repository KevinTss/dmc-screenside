import { Icon } from 'src/components/ui';
import { useAppState, useLocale } from 'src/hooks';

import { Container, Title, Right, Left, Button } from './CartHeader.styles';

export const CartHeader = () => {
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
