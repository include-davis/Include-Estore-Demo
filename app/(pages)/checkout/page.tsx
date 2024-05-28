import styles from './page.module.scss';
import DeliveryFormSection from './_components/CheckoutForm/DeliveryFormSection/DeliveryFormSection';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <div>
        <DeliveryFormSection />
      </div>
    </div>
  );
}
