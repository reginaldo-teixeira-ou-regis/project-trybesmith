import { Order } from '../types/Order';
import orderModel from '../models/order.model';

async function findOrders(): Promise<Order[]> {
  const orders = await orderModel.findOrders();
  return orders;
}

export default {
  findOrders,
};