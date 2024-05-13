import styles from './page.module.scss';
import DeliveryFormSection from './_components/CheckoutForm/DeliveryFormSection/DeliveryFormSection';
import CheckoutCart from './_components/CheckoutCart/CheckoutCart';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <DeliveryFormSection />
      <CheckoutCart />
    </div>
  );
}
