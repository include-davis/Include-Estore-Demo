import ProductCard, { ProductProps } from './ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: ProductProps[];
  selectedTags: string[];
  searchQuery: string;
  sortOption: string;
}

export default function ProductList({
  products,
  selectedTags,
  searchQuery,
  sortOption,
}: ProductListProps) {
  const filteredProducts =
    selectedTags.length === 0
      ? products
      : products.filter((product) =>
          product.tags.some((tag) => selectedTags.includes(tag))
        );

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className={styles.products_container}>
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
