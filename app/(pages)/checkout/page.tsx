import styles from './page.module.scss';
import DeliveryFormSection from './_components/CheckoutForm/DeliveryFormSection/DeliveryFormSection';
import CheckoutCart from './_components/CheckoutCart/CheckoutCart';
import PaymentForm from './_components/PaymentForm/PaymentForm';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <div>
        <DeliveryFormSection />
        <PaymentForm />
        <CheckoutCart />
      </div>
    </div>
  );
}
