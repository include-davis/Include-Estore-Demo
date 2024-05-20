import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import stripe from 'stripe';

export async function POST(_: NextRequest) {
  try {
    const headersList = headers();
    const origin = headersList.get('origin');
    const auth_stripe = new stripe(process.env.STRIPE_SECRET_KEY!);

    // Create Checkout Sessions from body params.
    const session = await auth_stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return NextResponse.json(
      {
        clientSecret: session.client_secret,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    const error = e as stripe.StripeRawError;
    return NextResponse.json(
      { ok: false, body: null, error: error.message },
      { status: 400 }
    );
  }
}
