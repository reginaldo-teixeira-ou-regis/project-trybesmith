import { NextFunction, Request, Response } from 'express';
import schema from './schema';

async function validationUser(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.userSchema.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  next();
}

export default validationUser;