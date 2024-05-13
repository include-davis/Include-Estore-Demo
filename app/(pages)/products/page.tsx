import ProductList from './_components/products/ProductList';
import styles from './page.module.scss';

export default function Shop() {
  return (
    <main className={styles.container}>
      <h2>shop</h2>
      <ProductList />
    </main>
  );
}
