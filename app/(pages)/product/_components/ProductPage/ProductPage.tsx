'use client';

import { useState } from 'react';
import styles from './ProductPage.module.scss';
import Image from 'next/image';
import { useShoppingCart } from '@hooks/useShoppingCart';

interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  description: string;
  options?: string[];
}

export default function ProductPage({
  id,
  src,
  alt,
  name,
  price,
  description,
  options = [],
}: Product) {
  const { add_to_cart } = useShoppingCart();
  const [added, setAdded] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAdd = () => {
    if (options.length && !selectedOption) {
      alert('Please select a size!');
      return;
    }

    add_to_cart(id, selectedOption);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main_img_container}>
        <Image src={src} alt={alt} fill className={styles.main_image} />
      </div>

      <div className={styles.prod_information}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.line} />
        <p className={styles.price}>${price}</p>

        {options.length > 0 && (
          <div className={styles.option_buttons_container}>
        
            <div className={styles.option_buttons}>
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.option_button} ${
                    selectedOption === option ? styles.selected : ''
                  }`}
                  onClick={() => {
                    setSelectedOption(option);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          className={
            added
              ? `${styles.add_to_cart_button} ${styles.added}`
              : styles.add_to_cart_button
          }
          onClick={handleAdd}
          disabled={added}
        >
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
