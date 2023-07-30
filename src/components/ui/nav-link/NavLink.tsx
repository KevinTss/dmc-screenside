import type { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { NavLinkEl } from './NavLink.styles';

type NavLinkProps = {
  children: ReactNode
} & LinkProps

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLinkEl {...props}>
      {children}
    </NavLinkEl>
  );
}
