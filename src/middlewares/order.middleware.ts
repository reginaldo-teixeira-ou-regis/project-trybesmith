import { NextFunction, Request, Response } from 'express';
import schema from './schema';

async function validationOrder(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.orderSchema.validate(req.body);
  if (error) {
    return res.status(error.message.includes('is required') ? 400 : 422)
      .json({ message: error.message });
  }
  if (req.body.productsIds.length === 0) {
    return res.status(422).json({
      message: '"productsIds" must include only numbers',
    });
  }
  next();
}

export default validationOrder;