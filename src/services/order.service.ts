import { IOrder } from '../Interfaces';
import orderModel from '../models/order.model';
import schema from '../middlewares/schema';

async function findAllOrders(): Promise<IOrder[]> {
  const orders = await orderModel.findAllOrders();
  return orders;
}

async function createNewOrder(
  order: { productsIds: number[] }, 
  userId: number,
): Promise<null | { message: string }> {
  const { error } = schema.orderSchema.validate(order);
  if (error) {
    return { message: error.message };
  }
  await orderModel.createNewOrder(order, userId);
  return null;
}

export default {
  findAllOrders,
  createNewOrder,
};