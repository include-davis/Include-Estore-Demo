'use client';

import { useState } from 'react';
import styles from './ShoppingCart.module.scss';
import { useShoppingCart } from '@hooks/useShoppingCart';

import { FaShoppingCart } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import CartItem from './CartItem';
import Link from 'next/link';

export default function ShoppingCart() {
  const [show, setShow] = useState(false);
  const { loading, cart } = useShoppingCart();
  return (
    <>
      <button
        className={styles.cart_button}
        onClick={() => setShow((prev) => !prev)}
      >
        <FaShoppingCart />
      </button>
      <div
        className={`${styles.background_blur} ${show ? styles.show : null}`}
        onClick={() => setShow(false)}
      />
      <div
        className={`${styles.sidebar_container} ${
          show ? styles.slide_in : null
        }`}
      >
        <button className={styles.exit_button} onClick={() => setShow(false)}>
          <HiXMark className={styles.x_mark} />
        </button>
        {loading ? (
          'loading...'
        ) : (
          <div className={styles.cart_items}>
            {cart.map((cart_item, index) => {
              return <CartItem key={index} {...cart_item} />;
            })}
          </div>
        )}
        <div className={styles.review_order}>
          <Link href="/checkout">
            <button
              className={styles.review_order_button}
              onClick={() => setShow(false)}
            >
              review order
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
