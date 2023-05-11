import { Text } from './style';

export default function TextElement({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
}
