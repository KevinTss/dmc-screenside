import { Drawer } from '../../ui';
import { useCart } from '../../../hooks';

import ProductCartPreview from '../../product/cart-preview';
import CartHeader from '../header';
import CartFooter from '../footer';

export default function CartDrawer() {
  const { data, isOpen, close } = useCart();

  return (
    <Drawer isOpen={isOpen} onClose={close}>
      <CartHeader />
      {data?.lines?.map((item, index) => (
        <ProductCartPreview key={index} cartItem={item} />
      ))}
      <CartFooter />
    </Drawer>
  );
}
