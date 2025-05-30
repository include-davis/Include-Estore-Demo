'use client';
import useProduct from '@hooks/useProduct';
import ProductPage from '../_components/ProductPage/ProductPage';

interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  description: string;
}

export default function Product({ params }: { params: { id: string } }) {
  const { product, loading } = useProduct(params.id);
  if (loading) {
    return 'loading...';
  }

  if (product === null) {
    return 'product does not exist';
  }
  return <ProductPage {...(product as Product)} />;
}
