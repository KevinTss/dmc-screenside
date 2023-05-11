import Link from 'next/link';

import { NavLinkEl } from './style';

export default function NavLink({ children, ...props }) {
  return (
    <Link {...props}>
      <NavLinkEl>{children}</NavLinkEl>
    </Link>
  );
}
