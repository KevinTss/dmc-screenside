import { Nav } from 'src/components/nav';
import { Drawer, Icon } from 'src/components/ui';

import { Button } from './MobileNav.styles'

type MobileNavProps = {
  isOpen: boolean,
  close: VoidFunction
}

export const MobileNav = ({ isOpen, close }: MobileNavProps) => (
  <Drawer isOpen={isOpen} onClose={close}>
    <Button onClick={close}>
      <Icon name='cross' />
    </Button>
    <Nav isVertical />
  </Drawer>
);
