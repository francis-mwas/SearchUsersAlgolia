import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import connectDb from './config/dbConfig.js';
import UserRouter from './routes/UserRoutes.js';

connectDb();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/', UserRouter);

app
  .listen(PORT, () => {
    console.log(`The app is listening on port: ${PORT}`);
  })
  .on('error', (err) => {
    console.log(`An error occur when listening to port: ${PORT}`);
  });

export default app;
