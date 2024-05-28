import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import Stripe from 'stripe';

export default function CheckoutForm({
  secret,
  name,
  address,
  address2,
  city,
  state,
  zip,
  phone,
}: {
  secret: string;
  name: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const key = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
  const payment = new Stripe(`${key}`);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    console.log('address:', address);

    const result = await stripe.confirmCardPayment(`${secret}`, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: name,
          address: {
            city: city,
            country: 'US',
            line1: address,
            line2: address2,
            postal_code: zip,
            state: state,
          },
          phone: phone,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (for example, insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        const intent = result.paymentIntent.payment_method;

        const paymentMethod = await payment.paymentMethods.retrieve(
          `${intent}`,
          {
            apiKey: `${key}`,
          }
        );
        console.log(paymentMethod);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}
