import stripe from "../config/stripe";
import { Request, Response } from 'express';

export const createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { amount, currency } = req.body;
    
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency,
        });
    
        res.send({
          clientSecret: paymentIntent.client_secret,
        });
      } catch (error: any) {
        res.status(500).send({ error: error.message });
      }
}