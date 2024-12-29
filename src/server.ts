import express from 'express';
import app from './app';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000',
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
