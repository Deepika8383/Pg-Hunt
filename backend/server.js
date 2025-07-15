// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import PGRoutes from './Routes/PGRoutes.js';
import AuthRoutes from './Routes/AuthRoutes.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL in prod
    credentials: true // Only if you’re using cookies
  }));
app.use(express.json());

app.use('/api/auth', AuthRoutes);
app.use('/api/pgs', PGRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
