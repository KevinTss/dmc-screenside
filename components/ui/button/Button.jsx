import {
  DefaultButton,
  IconContainer,
  MinimalButton,
  PrimaryButton,
} from './style';
import Icon from '../icon';
import { forwardRef } from 'react';

const getButton = (variant) =>
  ({
    default: DefaultButton,
    minimal: MinimalButton,
    primary: PrimaryButton,
  }[variant]);

const Button = forwardRef(
  ({ children, variant = 'default', iconLeft, onClick, ...props }, ref) => {
    const ButtonComponent = getButton(variant);

    return (
      <ButtonComponent onClick={onClick} ref={ref} {...props}>
        {iconLeft && (
          <IconContainer>
            <Icon name={iconLeft} />
          </IconContainer>
        )}
        {children}
      </ButtonComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;
