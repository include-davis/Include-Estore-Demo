'use client';
import { useState, useEffect } from 'react';

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

  const updateValue = (newValue: string) => {
    window.localStorage.setItem(key, newValue);
    setData(newValue);
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
  };

  return { loading, data, updateValue, removeValue };
}
