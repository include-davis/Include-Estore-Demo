import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import Stripe from 'stripe';

export default function CheckoutForm({ secret }: { secret: string }) {
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

    const result = await stripe.confirmCardPayment(`${secret}`, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: 'Jenny Rosen',
          email: 'matt@gmail.com',
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
        console.log('Payment success');
        console.log(result.paymentIntent);
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
