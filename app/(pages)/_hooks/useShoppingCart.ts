'use client';
import { useContext } from 'react';

import { ShoppingCartContext } from '@contexts/ShoppingCartContext';

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useAuth must be used within a ShoppingCartContext');
  }
  return context;
}
