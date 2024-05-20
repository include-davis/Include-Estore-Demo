import { NextRequest, NextResponse } from 'next/server';
import stripe from 'stripe';

export async function GET(request: NextRequest) {
  try {
    const auth_stripe = new stripe(process.env.STRIPE_SECRET_KEY!);
    const searchParams = request.nextUrl.searchParams;
    const session_id = searchParams.get('session_id');

    const session = await auth_stripe.checkout.sessions.retrieve(
      session_id as string
    );

    return NextResponse.json(
      {
        customer_email: session.customer_details!.email,
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
