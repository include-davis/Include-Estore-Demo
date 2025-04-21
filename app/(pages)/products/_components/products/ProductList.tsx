import ProductCard, { ProductProps } from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: ProductProps[];
  selectedTags: string[];
}

export default function ProductList({
  products,
  selectedTags,
}: ProductListProps) {
  const filteredProducts =
    selectedTags.length === 0
      ? products
      : products.filter((product) =>
          product.tags.some((tag) => selectedTags.includes(tag))
        );

  return (
    <div className={styles.products_container}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
