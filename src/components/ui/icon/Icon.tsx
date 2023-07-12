import { BsCart2, BsSearch, BsList, BsXLg, BsPlus, BsDash } from 'react-icons/bs';

const icons = {
  cart: BsCart2,
  cross: BsXLg,
  list: BsList,
  minus: BsDash,
  plus: BsPlus,
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
