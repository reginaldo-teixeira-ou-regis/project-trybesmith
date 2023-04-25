import { NextFunction, Request, Response } from 'express';
import schema from './schema';
import StatusCodes from '../utils/StatusCodes';

async function validationProduct(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.productSchema.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required')
      ? StatusCodes.BAD_REQUEST : StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: error.message });
  }
  next();
}

export default validationProduct;