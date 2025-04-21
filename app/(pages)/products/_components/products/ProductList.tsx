import ProductCard, { ProductProps } from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: ProductProps[];
  selectedTags: string[];
  searchQuery: string;
}

export default function ProductList({
  products,
  selectedTags,
  searchQuery,
}: ProductListProps) {
  const filteredProducts =
    selectedTags.length === 0
      ? products
      : products.filter((product) =>
          product.tags.some((tag) => selectedTags.includes(tag))
        );

  const finalProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.products_container}>
      {finalProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
