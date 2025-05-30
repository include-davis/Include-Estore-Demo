import Link from 'next/link';
import styles from './ProductCard.module.scss';
import Image from 'next/image';

export interface ProductProps {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  tags: string[];
  discount?: number;
}

export default function ProductCard({
  id,
  src,
  alt,
  name,
  price,
  discount,
}: ProductProps) {
  return (
    <Link href={`/product/${id}`} className={styles.container}>
      <div className={styles.prod_image_container}>
        <Image src={src} alt={alt} fill className={styles.prod_img} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>
          {discount ? (
            <>
              <span className={styles.oldPrice}>${price}</span>{' '}
              <span>${price * (1.0 - discount)}</span>
            </>
          ) : (
            <>${price}</>
          )}
        </p>
      </div>
    </Link>
  );
}
