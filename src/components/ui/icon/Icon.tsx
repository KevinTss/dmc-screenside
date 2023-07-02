import { BsCart2, BsSearch, BsList, BsXLg } from 'react-icons/bs';

const icons = {
  cart: BsCart2,
  cross: BsXLg,
  list: BsList,
  search: BsSearch,
}

type IconName = keyof typeof icons

const getIcon = (name: IconName) => (icons[name]);

type IconProps = {
  name: IconName
}

export const Icon = ({ name }: IconProps) => {
  const IconComponent = getIcon(name);

  return <IconComponent />;
}
