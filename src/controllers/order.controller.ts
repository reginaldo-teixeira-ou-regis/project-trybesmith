import { Request, Response } from 'express';
import orderModel from '../models/order.model';

async function findAllOrders(req: Request, res: Response) {
  const orders = await orderModel.findAllOrders();
  return res.status(200).json(orders);
}

export default {
  findAllOrders,
};