import { useState } from 'react';
import styles from './ProductSort.module.scss';

const options = [
  { value: 'default', label: 'default' },
  { value: 'name-asc', label: 'alphabetically, A-Z' },
  { value: 'name-desc', label: 'alphabetically, Z-A' },
  { value: 'price-asc', label: 'price, low-high' },
  { value: 'price-desc', label: 'price, high-low' },
];

interface ProductSortProps {
  sortOption: string;
  onChange: (option: string) => void;
}

export default function ProductSort({
  sortOption,
  onChange,
}: ProductSortProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.trigger}>
        <div>sort by: {options.find((o) => o.value === sortOption)?.label}</div>
        <div>▼</div>
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li key={opt.value} onClick={() => handleSelect(opt.value)}>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
