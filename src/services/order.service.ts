import { Order } from '../types';
import orderModel from '../models/order.model';

async function findAllOrders(): Promise<Order[]> {
  const orders = await orderModel.findAllOrders();
  return orders;
}

export default {
  findAllOrders,
};