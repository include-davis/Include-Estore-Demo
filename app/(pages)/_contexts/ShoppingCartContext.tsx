'use client';
import { createContext, useState, useEffect, useCallback } from 'react';
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
  prod_price: number;
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
        const filtered_local_data = local_data.filter(
          (local_item: LocalItem) =>
            products.filter((p) => p.id === local_item.prod_id)[0]
              ? true
              : false
        );

        if (filtered_local_data.length !== local_data.length) {
          updateValue(JSON.stringify(filtered_local_data));
        } else {
          const expanded_data = local_data.map((local_item: LocalItem) => {
            const item = products.filter((p) => p.id === local_item.prod_id)[0];
            return {
              prod_id: item.id,
              img_url: item.src,
              prod_name: item.name,
              prod_price: item.price,
              quantity: local_item.quantity,
            };
          });
          setCart(expanded_data);
        }
      } catch (e) {
        updateValue(JSON.stringify([]));
        setCart([]);
      }
      setLoading(false);
    }
  }, [cartLoading, data, updateValue]);

  const add_to_cart = useCallback(
    (id: string) => {
      const cart_data = JSON.parse(data);
      cart_data.push({
        prod_id: id,
        quantity: 1,
      });
      updateValue(JSON.stringify(cart_data));
    },
    [data, updateValue]
  );

  const remove_from_cart = useCallback(
    (_: string) => {
      const cart_data = JSON.parse(data);
      updateValue(JSON.stringify(cart_data));
    },
    [data, updateValue]
  );

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
