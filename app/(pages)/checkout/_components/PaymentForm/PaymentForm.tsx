'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function App() {
  const [clientSecret, setClientSecret] = useState('');

  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  }, []);

  useEffect(() => {
    fetchClientSecret();
  }, [fetchClientSecret]);

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
