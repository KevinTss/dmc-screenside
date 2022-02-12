import { Drawer } from '../../ui';
import { useCart } from '../../../hooks';

export default function CartDrawer({ isOpen, onClose }) {
  const { data } = useCart();

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      {data?.lines?.map((item) => {
        const productName = item?.node?.merchandise?.product?.title;
        const quantity = item?.node?.quantity;
        const cost = item?.node?.estimatedCost?.totalAmount;

        return (
          <div key={productName}>
            <p>{productName}</p>
            <p>quantity: {quantity}</p>
            <p>
              price: {cost?.amount} {cost?.currencyCode}
            </p>
          </div>
        );
      })}
    </Drawer>
  );
}
