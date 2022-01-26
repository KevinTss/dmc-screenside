import { DefaultButton, MinimalButton, IconContainer } from './style';
import Icon from '../icon';

const getButton = (variant) =>
  ({
    default: DefaultButton,
    minimal: MinimalButton,
  }[variant]);

export default function Button({
  children,
  variant = 'default',
  iconLeft,
  onClick,
}) {
  const ButtonComponent = getButton(variant);

  return (
    <ButtonComponent onClick={onClick}>
      {iconLeft && (
        <IconContainer>
          <Icon name={iconLeft} />
        </IconContainer>
      )}
      {children}
    </ButtonComponent>
  );
}
