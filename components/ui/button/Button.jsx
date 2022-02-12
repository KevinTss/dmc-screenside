import {
  DefaultButton,
  IconContainer,
  MinimalButton,
  PrimaryButton,
} from './style';
import Icon from '../icon';

const getButton = (variant) =>
  ({
    default: DefaultButton,
    minimal: MinimalButton,
    primary: PrimaryButton,
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
