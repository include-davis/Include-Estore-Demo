'use client';
import { createContext, useState, useEffect } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import products from '../products/_data/products';

export const ShoppingCartContext = createContext<ShoppingCartContextInt>({
  loading: true,
  cart: [],
  add_to_cart: (_: string) => {},
  remove_from_cart: (_: string) => {},
});

interface CartItem {
  prod_id: string;
  img_url: string;
  prod_name: string;
  prod_price: string;
  quantity: number;
}

interface LocalItem {
  prod_id: string;
  quantity: number;
}

interface ShoppingCartContextInt {
  loading: boolean;
  cart: CartItem[];
  add_to_cart: (id: string) => void;
  remove_from_cart: (id: string) => void;
}

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const {
    loading: cartLoading,
    data,
    updateValue,
  } = useLocalStorage('shopping_cart');

  useEffect(() => {
    if (!cartLoading) {
      try {
        const local_data = JSON.parse(data);
        const expanded_data = local_data.map((local_item: LocalItem) => {
          return products.filter((p) => p.id === local_item.prod_id)[0] ?? null;
        });
        setCart(expanded_data);
      } catch (e) {
        setCart([]);
      }
      setLoading(false);
    }
  }, [cartLoading, data]);

  const add_to_cart = (id: string) => {
    const product = products.filter((p) => p.id === id)[0] ?? null;
    const cart_data = JSON.parse(data);
    const new_cart = cart_data.append(product);
    updateValue(JSON.stringify(new_cart));
  };

  const remove_from_cart = (_: string) => {
    const cart_data = JSON.parse(data);
    updateValue(JSON.stringify(cart_data));
  };

  const contextValue = {
    loading: loading || cartLoading,
    cart,
    add_to_cart,
    remove_from_cart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
