'use client';

import DeliveryOptions from './DeliveryOptions/DeliveryOptions';
import ShippingInfo from './ShippingInfo/ShippingInfo';

import styles from './DeliveryFormSection.module.scss';

export default function DeliveryFormSection() {
  return (
    <div className={styles.delivery_form}>
      <h2 className={styles.heading}>Delivery</h2>
      <DeliveryOptions />
      <ShippingInfo />
    </div>
  );
}
