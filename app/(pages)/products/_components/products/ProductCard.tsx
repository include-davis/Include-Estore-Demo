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
}

export default function ProductCard({
  id,
  src,
  alt,
  name,
  price,
  tags,
}: ProductProps) {
  return (
    <Link href={`/product/${id}`} className={styles.container}>
      <div className={styles.prod_image_container}>
        <Image src={src} alt={alt} fill className={styles.prod_img} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{`$${price}`}</p>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </Link>
  );
}
