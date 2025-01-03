// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/index';
import cors from 'cors';
import webhookRoutes from './models/webhook';


dotenv.config();

const app = express();

app.use(cors({
  origin: ['https://stocks-academy.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Stripe Webhook requires raw body parsing
app.use('/webhook', webhookRoutes);

// Middleware

app.use(bodyParser.json());

// Routes
app.use('/api', router);

export default app;
