import { NextFunction, Request, Response } from 'express';
import validationSchema from './validationSchema';

async function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { error } = validationSchema.product.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  next();
}

export default validateProducts;