import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';
import products from '../../_data/products';

export default function ProductList() {
  return (
    <div className={styles.products_container}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
