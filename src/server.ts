import express from 'express';
import app from './app';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

// CORS Configuration
app.use(cors({
  origin: ['https://stocks-academy.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Start Server
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error:any) {
    console.error('Error starting the server:', error.message);
    process.exit(1);
  }
};

startServer();
