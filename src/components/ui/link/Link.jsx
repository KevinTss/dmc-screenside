import { Link } from './style';

export default function LinkElement({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}
