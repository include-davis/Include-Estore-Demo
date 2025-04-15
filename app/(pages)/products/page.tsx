'use client';

import { useState } from 'react';
import ProductList from './_components/products/ProductList';
import ProductSidebar from './_components/products/ProductSidebar';
import styles from './page.module.scss';
import products from './_data/products';

export default function Shop() {
  const [filter, setFilter] = useState('all');

  return (
    <main className={styles.container}>
      <h2>shop</h2>
      <div className={styles.productList}>
        <ProductSidebar filter={filter} onFilterChange={setFilter} />
        <ProductList products={products} filter={filter} />
      </div>
    </main>
  );
}
