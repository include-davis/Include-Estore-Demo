import { NextRequest, NextResponse } from 'next/server';
import stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const { total } = await request.json();
    const auth_stripe = new stripe(process.env.STRIPE_SECRET_KEY!);

    // Creates a checkout session from body params.
    const session = await auth_stripe.paymentIntents.create({
      amount: total * 100,
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
