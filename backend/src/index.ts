import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import morgan from "morgan";
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import authRoutes from './routes/authRoutes'
import taskRoutes from './routes/taskRoutes';
const app = express()

const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(authRoutes)
app.use(taskRoutes)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

const databaseUrl = process.env.DATABASE_URL
mongoose
    .connect(databaseUrl)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error:', err.message));