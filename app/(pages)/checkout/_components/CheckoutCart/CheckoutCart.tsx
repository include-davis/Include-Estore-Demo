'use client';

import styles from './CheckoutCart.module.scss';
import { useShoppingCart } from '@hooks/useShoppingCart';

export default function CheckoutCart() {
  const { loading, cart, compute_total } = useShoppingCart();
  if (loading) {
    return 'loading...';
  }
  return (
    <div className={styles.container}>
      {JSON.stringify(cart)}
      <p>total cost: ${compute_total()}</p>
    </div>
  );
}
