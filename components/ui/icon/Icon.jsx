import { BsCart2, BsSearch } from 'react-icons/bs';

const getIcon = (name) =>
  ({
    cart: BsCart2,
    search: BsSearch,
  }[name]);

export default function Icon({ name }) {
  const IconComponent = getIcon(name);

  return <IconComponent />;
}
