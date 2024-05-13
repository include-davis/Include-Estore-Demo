'use client';
import useProduct from '@hooks/useProduct';
import styles from './page.module.scss';

export default function Product({ params }: { params: { id: string } }) {
  const { product, loading } = useProduct(params.id);
  if (loading) {
    return 'loading...';
  }
  return <div className={styles.container}>{JSON.stringify(product)}</div>;
}
