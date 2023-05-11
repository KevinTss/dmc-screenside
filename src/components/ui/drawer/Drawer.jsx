import Portal from '../../../HOCs/portal';
import { Container, Overlay, DrawerEl } from './style';

export default function Drawer({ children, isOpen, onClose }) {
  return (
    <Portal>
      <Container $isVisible={isOpen}>
        <Overlay onClick={onClose} $isVisible={isOpen} />
        <DrawerEl $isVisible={isOpen}>{children}</DrawerEl>
      </Container>
    </Portal>
  );
}
