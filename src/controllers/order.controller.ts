import { Request, Response } from 'express';
import orderModel from '../models/order.model';
import orderService from '../services/order.service';
import { IUserRole } from '../Interfaces';

async function findAllOrders(req: Request, res: Response) {
  const orders = await orderModel.findAllOrders();
  return res.status(200).json(orders);
}

async function createNewOrder(req: IUserRole, res: Response) {
  if (req.user !== undefined) {
    await orderService.createNewOrder(req.body, Number(req.user.id));
    return res.status(201).json({
      userId: Number(req.user.id),
      productsIds: req.body.productsIds,
    });
  }
}

export default {
  findAllOrders,
  createNewOrder,
};