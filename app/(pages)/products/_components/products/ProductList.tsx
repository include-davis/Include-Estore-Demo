import ProductCard, { ProductProps } from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: ProductProps[];
  filter: string;
}

export default function ProductList({ products, filter }: ProductListProps) {
  const filteredProducts = products.filter((product) =>
    filter === 'all' ? true : product.tags.includes(filter)
  );
  return (
    <div className={styles.products_container}>
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
