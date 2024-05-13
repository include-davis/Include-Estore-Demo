'use client';
import { useState, useEffect, useCallback } from 'react';

export default function useLocalStorage(key: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      setData(item);
    }
    setLoading(false);
  }, [key]);

  const updateValue = useCallback(
    (newValue: string) => {
      window.localStorage.setItem(key, newValue);
      setData(newValue);
    },
    [key]
  );

  const removeValue = useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);

  return { loading, data, updateValue, removeValue };
}
