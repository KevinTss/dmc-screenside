import { EmptyState } from 'src/components/cart-empty-state';
import { CartFooter } from 'src/components/cart-footer';
import { Drawer } from 'src/components/ui';
import { useAppState } from 'src/hooks';

// import { getTotalCartProductsLength } from '../../utils';
// import CartHeader from '../cart/header';
// import ProductCartPreview from '../product/cart-preview';

export const CartDrawer = () => {
  // const { data, isOpen, close } = useCart();
  // const isCardEmpty = !data?.lines?.length;
  const { state: { isAsideCartOpen }, toggleAsideCart } = useAppState()

  return (
    <Drawer isOpen={isAsideCartOpen} onClose={toggleAsideCart}>
      {/* <CartHeader totalProduct={getTotalCartProductsLength(data)} /> */}
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
