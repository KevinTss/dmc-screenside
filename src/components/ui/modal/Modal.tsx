import { ReactNode } from 'react'

import { Container, Overlay, DrawerEl } from './Modal.styles';
import { Portal } from '../../../components/ui/portal';


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
