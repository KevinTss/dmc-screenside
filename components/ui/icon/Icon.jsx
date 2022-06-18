import { BsCart2, BsSearch, BsList } from 'react-icons/bs';

const getIcon = (name) =>
  ({
    cart: BsCart2,
    search: BsSearch,
    list: BsList,
  }[name]);

export default function Icon({ name }) {
  const IconComponent = getIcon(name);

  return <IconComponent />;
}
