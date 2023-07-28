/**
 * @todo
 * This view is not used for now, we send the user directly from cart drawer to
 * shopify checkout
 */

// import { ContactForm } from '../../components/contact-form';
// import { useRouter } from 'next/navigation'
import { Container } from './CheckoutView.styles';
import { CartBody } from '../../../components/cart-body';
import { DefaultTemplate } from '../../../components/template';
// import { Text } from '../../components/ui';
import { useCart, useShopifyCartCreate } from '../../../hooks';


export const CheckoutView = () => {
  // const { t } = useLocale();
  // const { push } = useRouter();
  const { create, isLoading } = useShopifyCartCreate({
    onSuccess: (cartId, checkoutUrl) => {
      console.log('to do')
      // store cart id in local storage
      // Open checkout in new tab
    }
  })
  const { products } = useCart()

  return (
    <DefaultTemplate forceHeaderBlack>
      <Container>
        <CartBody />
        <button onClick={() => {
          console.log('do', products)
          const a = products[0]
          create([{
            merchandiseId: a.variantId,
            quantity: a.quantity
          }])
        }}>create</button>
      </Container>
    </DefaultTemplate>
  );
};
