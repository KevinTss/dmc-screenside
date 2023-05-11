import { ReactNode } from 'react'
import Portal from '../../../HOCs/portal';
import { Container, Overlay, DrawerEl } from './Modal.styles';

type ModalProps = {
  children: ReactNode,
  isOpen: boolean,
  onClose?: VoidFunction
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => (
  <Portal>
    <Container>
      <Overlay onClick={onClose} $isVisible={isOpen} />
      <DrawerEl $isVisible={isOpen}>{children}</DrawerEl>
    </Container>
  </Portal>
);
