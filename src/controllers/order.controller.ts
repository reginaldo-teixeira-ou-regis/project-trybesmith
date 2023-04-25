import { Request, Response } from 'express';
import orderModel from '../models/order.model';

async function findOrders(req: Request, res: Response) {
  const orders = await orderModel.findOrders();
  return res.status(200).json(orders);
}

export default {
  findOrders,
};