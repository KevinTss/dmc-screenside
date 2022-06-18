import { Drawer, Button } from '../ui';
import Nav from '../nav';

export default function MobileNav({ isOpen, close }) {
  return (
    <Drawer isOpen={isOpen} onClose={close}>
      <Button onClick={close}>Close</Button>
      <Nav isVertical />
    </Drawer>
  );
}
