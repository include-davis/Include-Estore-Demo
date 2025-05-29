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
  customizations?: Record<string, string[]>;
  discountPercent?: number; // add discount percent as whole int, automatocly applies it to price
}


export default function ProductPage({
  id,
  src,
  alt,
  name,
  price,
  description,
  customizations = {},
  discountPercent, // ✅ add this line
}: Product)
{
  const { add_to_cart } = useShoppingCart();
  const [added, setAdded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const discountedPrice = discountPercent
  ? (price * (1 - discountPercent / 100)).toFixed(2)
  : null;

  const handleAdd = () => {
    // Ensure every customization has a selected option
    const missing = Object.keys(customizations).find(
      (key) => !selectedOptions[key]
    );
    if (missing) {
      alert(`Please select a ${missing}!`);
      return;
    }

    add_to_cart(id, selectedOptions);
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
        <p className={styles.price}>
  {discountedPrice ? (
    <>
      <span className={styles.original_price}>${price.toFixed(2)}</span>
      <span className={styles.discounted_price}> ${discountedPrice}</span>
    </>
  ) : (
    <>${price.toFixed(2)}</>
  )}
</p>

        {Object.entries(customizations).map(([category, options]) => (
          <div key={category} className={styles.option_buttons_container}>
            <p className={styles.customization_label}>{category}</p>
            <div className={styles.option_buttons}>
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.option_button} ${
                    selectedOptions[category] === option ? styles.selected : ''
                  }`}
                  onClick={() =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [category]: option,
                    }))
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

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
