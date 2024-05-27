'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useShoppingCart } from '@hooks/useShoppingCart';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function App() {
  const { loading, cart, compute_total } = useShoppingCart();
  const [clientSecret, setClientSecret] = useState('');

  const fetchClientSecret = useCallback(async (total: number) => {
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ total }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      const total = compute_total();
      fetchClientSecret(total);
    }
  }, [loading, compute_total, fetchClientSecret]);

  return (
    <div id="checkout">
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm secret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}
