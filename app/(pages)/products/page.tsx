'use client';

import { useState } from 'react';
import ProductList from './_components/products/ProductList';
import ProductSidebar from './_components/products/ProductSidebar';
import SearchBar from './_components/products/SearchBar';
import styles from './page.module.scss';
import products from './_data/products';

export default function Shop() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleReset = () => {
    setSelectedTags([]);
  };

  return (
    <main className={styles.container}>
      <h2>shop</h2>
      <SearchBar query={searchQuery} onChange={setSearchQuery} />{' '}
      <div className={styles.productList}>
        <ProductSidebar
          selectedTags={selectedTags}
          onTagChange={handleTagChange}
          onReset={handleReset}
        />
        <ProductList
          products={products}
          selectedTags={selectedTags}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  );
}
