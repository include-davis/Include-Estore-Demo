import styles from './ProductSort.module.scss';

interface ProductSortProps {
  sortOption: string;
  onChange: (option: string) => void;
}

export default function ProductSort({
  sortOption,
  onChange,
}: ProductSortProps) {
  return (
    <div className={styles.productSort}>
      <label htmlFor="sort">sort by:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => onChange(e.target.value)}
        className={styles.sort}
      >
        <option value="default">default</option>
        <option value="name-asc">alphabetically, A-Z</option>
        <option value="name-desc">alphabetically, Z-A</option>
        <option value="price-asc">price, low-high</option>
        <option value="price-desc">price, high-low</option>
      </select>
    </div>
  );
}
