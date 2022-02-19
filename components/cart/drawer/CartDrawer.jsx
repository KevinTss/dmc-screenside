import { Drawer } from '../../ui';
import { useCart } from '../../../hooks';

import ProductCartPreview from '../../product/cart-preview';
import CartHeader from '../header';
import CartFooter from '../footer';

export default function CartDrawer({ isOpen, onClose }) {
  const { data } = useCart();

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <CartHeader />
      {data?.lines?.map((item, index) => (
        <ProductCartPreview key={index} cartItem={item} />
      ))}
      <CartFooter />
    </Drawer>
  );
}
