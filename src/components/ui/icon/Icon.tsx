import {
  BsCardImage,
  BsCart2,
  BsDash,
  BsList,
  BsPlus,
  BsSearch,
  BsXLg,
} from 'react-icons/bs';

const icons = {
  cart: BsCart2,
  cross: BsXLg,
  image: BsCardImage,
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
