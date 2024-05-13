'use client';

import { useState } from 'react';
import styles from './ShoppingCart.module.scss';

import { FaShoppingCart } from 'react-icons/fa';

export default function ShoppingCart() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className={styles.cart_button}
        onClick={() => setShow((prev) => !prev)}
      >
        <FaShoppingCart />
      </button>
      <div className={`${styles.cart_container} ${show ? styles.show : null}`}>
        <div
          className={`${styles.sidebar_container} ${
            show ? styles.slide_in : null
          }`}
        >
          SHOPPING CART
        </div>
      </div>
    </>
  );
}
