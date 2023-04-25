import { NextFunction, Request, Response } from 'express';
import schema from './schema';
import StatusCodes from '../utils/StatusCodes';

async function validationOrder(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.orderSchema.validate(req.body);
  if (error) {
    return res.status(error.message.includes('is required')
      ? StatusCodes.BAD_REQUEST : StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: error.message });
  }
  if (req.body.productsIds.length === 0) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: '"productsIds" must include only numbers',
    });
  }
  next();
}

export default validationOrder;