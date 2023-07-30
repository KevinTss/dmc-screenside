import { ReactNode } from 'react'
import { Portal } from 'src/components/ui/portal';

import { Container, Overlay, DrawerEl } from './Drawer.styles';

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
