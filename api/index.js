import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)//database connectivity
.then(() => {
    console.log('mongoDB is connected');
}
).catch((err) => console.log('Error->' +err));

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.use('/api/user', userRoutes);//imports useroutes(the user) route file
app.use('/api/auth', authRoutes);//imports authroutes(the user) route file

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  }
);