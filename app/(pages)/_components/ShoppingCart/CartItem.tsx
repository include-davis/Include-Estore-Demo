import styles from './CartItem.module.scss';
import Image from 'next/image';

interface CartItem {
  prod_id: string;
  img_url: string;
  prod_name: string;
  prod_price: number;
  quantity: number;
}

export default function CartItem({
  prod_id: _,
  img_url,
  prod_name,
  prod_price,
  quantity,
}: CartItem) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image src={img_url} alt="" fill className={styles.img} />
      </div>
      <div className={styles.prod_info}>
        <h3>{prod_name}</h3>
        <p>{quantity}</p>
      </div>
      <div className={styles.price}>${prod_price}</div>
    </div>
  );
}
