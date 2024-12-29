import express, { Request, Response } from 'express';
import { createPaymentIntent } from '../controllers/paymentController';

const router = express.Router();

router.post('/create-payment-intent', async (req: Request, res: Response) => {
  try {
    await createPaymentIntent(req, res);
  } catch (err) {    
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).send({ error: errorMessage });
  }
});

export default router;
