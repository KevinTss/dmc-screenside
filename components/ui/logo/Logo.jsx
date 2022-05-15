import { Container } from './style';

import logoUrl from '../../../assets/logo.svg';

const Button = () => {
  return (
    <Container>
      <img src={logoUrl.src} alt='table logo' />
    </Container>
  );
};

Button.displayName = 'Button';

export default Button;
