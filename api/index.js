import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import CommentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import AdvertisementRoutes from './routes/advertisement.route.js';


dotenv.config();//importing critical things which are stored in remote files for security

mongoose.connect(process.env.MONGO)//database connectivity
.then(() => {
    console.log('mongoDB is connected');
}
).catch((err) => console.log('mongoDB is not connected' + err));

const __dirname = path.resolve();//path is a module in node.js that allows you to work with file paths

const app = express();//using express to connect

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.use('/api/user', userRoutes);//imports useroutes(the user) route file
app.use('/api/auth', authRoutes);//imports authroutes(the user) route file
app.use('/api/post', postRoutes);//imports postroutes(the user) route file
app.use('/api/comment', CommentRoutes);//imports commentroutes(the user) route file
app.use('/api/ad', AdvertisementRoutes);//imports advertisement(the user) route file
//When an error is passed to next(), Express.js will skip all remaining non-error handling 
//routing and middleware functions and invoke this error-handling middleware
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) =>{//por paths other than given run this
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,//statusCode = statusCode can be writen in this way
      message,
    });
  }
);