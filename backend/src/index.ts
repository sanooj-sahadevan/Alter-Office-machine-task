import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

const app = express();

// CORS configuration with additional headers for Cross-Origin-Opener-Policy
const corsOptions = {
  origin: 'https://alter-office-machine-task.vercel.app',  // Update with your frontend URL
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

// Set the Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(authRoutes);
app.use(taskRoutes);

// Database connection and server startup
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const databaseUrl = process.env.DATABASE_URL;
mongoose
  .connect(databaseUrl)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error:', err.message));
