import { json } from '@sveltejs/kit';
import prisma from '$lib/server/db';
import type { RequestEvent } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-03-31.basil'
});

export async function POST({ request }: RequestEvent) {
  try {
    const { garageId, quantity, customerData } = await request.json();

    // Get garage details
    const garage = await prisma.garage.findUnique({
      where: { id: garageId }
    });

    if (!garage) {
      return json({ error: 'Garage not found' }, { status: 404 });
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(garage.price * quantity * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        garageId,
        quantity,
        customerEmail: customerData.email
      }
    });

    // Create order in database
    const order = await prisma.order.create({
      data: {
        garageId,
        email: customerData.email,
        name: customerData.name,
        address: customerData.address,
        city: customerData.city,
        zipCode: customerData.zipCode,
        country: customerData.country,
        total: garage.price * quantity,
        status: 'pending'
      }
    });

    return json({
      orderId: order.id,
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Order creation failed:', error);
    return json({ error: 'Failed to create order' }, { status: 500 });
  }
} 