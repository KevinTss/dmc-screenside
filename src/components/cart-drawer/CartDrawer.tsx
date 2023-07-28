import { CartBody } from '../../components/cart-body';
import { CartFooter } from '../../components/cart-footer';
import { CartHeader } from '../../components/cart-header';
import { CartProgress } from '../../components/cart-progress';
import { Drawer } from '../../components/ui';
import { useAppState } from '../../hooks';

export const CartDrawer = () => {
  const { state: { isAsideCartOpen }, toggleAsideCart } = useAppState()

  return (
    <Drawer isOpen={isAsideCartOpen} onClose={toggleAsideCart}>
      {isAsideCartOpen && (
        <>
          <CartHeader />
          <CartProgress />
          <CartBody />
          <CartFooter />
        </>
      )}
    </Drawer>
  );
}
