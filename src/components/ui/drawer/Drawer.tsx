import { ReactNode } from 'react'

import { Container, Overlay, DrawerEl } from './Drawer.styles';
import { Portal } from '../../../components/ui/portal';


type DrawerProps = {
  children: ReactNode,
  isOpen: boolean,
  onClose: VoidFunction
}

export const Drawer = ({ children, isOpen, onClose }: DrawerProps) => (
  <Portal>
    <Container>
      <Overlay onClick={onClose} $isVisible={isOpen} />
      <DrawerEl $isVisible={isOpen}>{children}</DrawerEl>
    </Container>
  </Portal>
);
