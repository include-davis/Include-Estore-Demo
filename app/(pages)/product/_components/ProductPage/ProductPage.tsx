'use client';

import styles from './ProductPage.module.scss';
import Image from 'next/image';

import { useShoppingCart } from '@hooks/useShoppingCart';

interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
}

export default function ProductPage({ id, src, alt, name, price }: Product) {
  const { add_to_cart } = useShoppingCart();
  return (
    <div className={styles.container}>
      <div className={styles.main_img_container}>
        <Image src={src} alt={alt} fill className={styles.main_image} />
      </div>
      <div className={styles.prod_information}>
        <h2>{name}</h2>
        <p>${price}</p>
        <button
          className={styles.add_to_cart_button}
          onClick={() => add_to_cart(id)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
