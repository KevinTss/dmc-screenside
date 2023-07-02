import { EmptyState } from 'src/components/cart-empty-state';
import { CartFooter } from 'src/components/cart-footer';
import { CartHeader } from 'src/components/cart-header';
import { Drawer } from 'src/components/ui';
import { useAppState } from 'src/hooks';

// import { getTotalCartProductsLength } from '../../utils';
// import ProductCartPreview from '../product/cart-preview';

export const CartDrawer = () => {
  // const { data, isOpen, close } = useCart();
  // const isCardEmpty = !data?.lines?.length;
  const { state: { isAsideCartOpen }, toggleAsideCart } = useAppState()

  return (
    <Drawer isOpen={isAsideCartOpen} onClose={toggleAsideCart}>
      <CartHeader />
      {/* {!isCardEmpty &&
        data?.lines?.map((item, index) => (
          <ProductCartPreview key={index} cartItem={item} />
        ))} */}
      {/* {isCardEmpty && <EmptyState />} */}
      <EmptyState />
      <CartFooter />
    </Drawer>
  );
}
