import styles from './ProductPage.module.scss';
import Image from 'next/image';

interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
}

export default function ProductPage({ id: _, src, alt, name, price }: Product) {
  return (
    <div className={styles.container}>
      <div className={styles.main_img_container}>
        <Image src={src} alt={alt} fill className={styles.main_image} />
      </div>
      <div className={styles.prod_information}>
        <h2>{name}</h2>
        <p>${price}</p>
        <button className={styles.add_to_cart_button}>add to cart</button>
      </div>
    </div>
  );
}
