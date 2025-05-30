'use client';

import { createContext, useState, useEffect, useCallback } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import products from '../products/_data/products';

export const ShoppingCartContext = createContext<ShoppingCartContextInt>({
  loading: true,
  cart: [],
  add_to_cart: (_: string) => {},
  remove_from_cart: (_: string) => {},
  compute_total: () => 0,
});

interface CartItem {
  prod_id: string;
  img_url: string;
  prod_name: string;
  prod_price: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
  discountPercent?: number;
}

interface LocalItem {
  prod_id: string;
  quantity: number;
  selectedOptions?: Record<string, string>;
  discount?: number;
}

interface ShoppingCartContextInt {
  loading: boolean;
  cart: CartItem[];
  add_to_cart: (
    id: string,
    selectedOptions?: Record<string, string>,
    discountPercent?: number
  ) => void;
  remove_from_cart: (id: string) => void;
  compute_total: () => number;
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
        const local_data: LocalItem[] =
          typeof data === 'string' ? JSON.parse(data) : data;

        const filtered_local_data = local_data.filter((local_item) =>
          products.some((p) => p.id === local_item.prod_id)
        );

        if (filtered_local_data.length !== local_data.length) {
          updateValue(JSON.stringify(filtered_local_data));
        }

        const expanded_data = filtered_local_data
          .map((local_item: LocalItem) => {
            const item = products.find((p) => p.id === local_item.prod_id);
            if (!item) return null;

            const discount = local_item.discount ?? item.discount;
            const price = discount
              ? Number((item.price * (1 - discount / 100)).toFixed(2))
              : item.price;

            return {
              prod_id: item.id,
              img_url: item.src,
              prod_name: item.name,
              prod_price: price,
              quantity: local_item.quantity,
              selectedOptions: local_item.selectedOptions,
              discountPercent: discount,
            };
          })
          .filter((item) => item !== null) as CartItem[];

        setCart(expanded_data);
      } catch (e) {
        updateValue(JSON.stringify([]));
        setCart([]);
      }

      setLoading(false);
    }
  }, [cartLoading, data, updateValue]);

  const add_to_cart = useCallback(
    (
      id: string,
      selectedOptions: Record<string, string> = {},
      discount?: number
    ) => {
      const cart_data: LocalItem[] =
        typeof data === 'string' ? JSON.parse(data) : data;

      const existingIndex = cart_data.findIndex(
        (item) =>
          item.prod_id === id &&
          JSON.stringify(item.selectedOptions) ===
            JSON.stringify(selectedOptions)
      );

      if (existingIndex !== -1) {
        cart_data[existingIndex].quantity += 1;
      } else {
        cart_data.push({
          prod_id: id,
          quantity: 1,
          selectedOptions,
          discount,
        });
      }

      updateValue(JSON.stringify(cart_data));
    },
    [data, updateValue]
  );

  const remove_from_cart = useCallback(
    (id: string) => {
      const cart_data: LocalItem[] =
        typeof data === 'string' ? JSON.parse(data) : data;

      const new_cart = cart_data.filter((item) => item.prod_id !== id);
      updateValue(JSON.stringify(new_cart));
    },
    [data, updateValue]
  );

  const compute_total = useCallback(() => {
    return cart.reduce((sum, item) => sum + item.prod_price * item.quantity, 0);
  }, [cart]);

  const contextValue = {
    loading: loading || cartLoading,
    cart,
    add_to_cart,
    remove_from_cart,
    compute_total,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
