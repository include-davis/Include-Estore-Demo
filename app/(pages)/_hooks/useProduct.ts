'use client';
import { useEffect, useState } from 'react';
import products from '../products/_data/products';

interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
}

export default function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredProducts = products.filter((p) => p.id === id);
    if (filteredProducts.length !== 0) {
      setProduct(filteredProducts[0]);
    }
    setLoading(false);
  }, [id]);

  return { product, loading };
}
