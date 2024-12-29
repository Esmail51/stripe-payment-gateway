import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripeSecret = process.env.STRIPE_SECRET;
if (!stripeSecret) {
  throw new Error('Stripe secret key is not defined');
}
const stripe = new Stripe(stripeSecret, {
  apiVersion: '2024-12-18.acacia',
});

export default stripe;
