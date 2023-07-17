import Nav from '../nav';
import { Drawer, Button } from '../ui';

export default function MobileNav({ isOpen, close }) {
  return (
    <Drawer isOpen={isOpen} onClose={close}>
      <Button onClick={close}>Close</Button>
      <Nav isVertical />
    </Drawer>
  );
}
