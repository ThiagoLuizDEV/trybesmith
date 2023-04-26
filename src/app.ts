import express from 'express';
import productRouter from './routers/product.router';
import userRouter from './routers/user.router';
import orderRoute from './routers/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRoute);
export default app;
