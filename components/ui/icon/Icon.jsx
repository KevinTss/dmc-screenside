import { BsCart2 } from 'react-icons/bs';

const getIcon = (name) =>
  ({
    cart: BsCart2,
  }[name]);

export default function Icon({ name }) {
  const IconComponent = getIcon(name);

  return <IconComponent />;
}
