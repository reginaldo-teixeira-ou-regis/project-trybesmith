import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validationToken from '../middlewares/auth.middleware';
import validationOrder from '../middlewares/order.middleware';

const orderRouter = Router();
orderRouter.get('/', orderController.findAllOrders);
orderRouter.post(
  '/',
  validationToken,
  validationOrder,
  orderController.createNewOrder,
);

export default orderRouter;