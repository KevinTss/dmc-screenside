import { Drawer } from '../../ui';
import { useCart } from '../../../hooks';

import ProductCartPreview from '../../product/cart-preview';
import CartHeader from '../header';
import CartFooter from '../footer';
import EmptyState from '../empty-state';
import { getTotalCartProductsLength } from '../../../src/utils';

export default function CartDrawer() {
  const { data, isOpen, close } = useCart();
  const isCardEmpty = !data?.lines?.length;

  return (
    <Drawer isOpen={isOpen} onClose={close}>
      <CartHeader totalProduct={getTotalCartProductsLength(data)} />
      {!isCardEmpty &&
        data?.lines?.map((item, index) => (
          <ProductCartPreview key={index} cartItem={item} />
        ))}
      {isCardEmpty && <EmptyState />}
      <CartFooter />
    </Drawer>
  );
}
