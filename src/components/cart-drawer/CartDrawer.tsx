import { CartBody } from 'src/components/cart-body';
import { CartFooter } from 'src/components/cart-footer';
import { CartHeader } from 'src/components/cart-header';
import { CartProgress } from 'src/components/cart-progress';
import { Drawer } from 'src/components/ui';
import { useAppState } from 'src/hooks';

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
