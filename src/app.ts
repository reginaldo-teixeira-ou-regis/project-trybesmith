import express from 'express';
import userRouter from './routers/user.router';
import productRouter from './routers/product.router';
import orderRouter from './routers/order.router';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;