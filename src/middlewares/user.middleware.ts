import { NextFunction, Request, Response } from 'express';
import validationSchema from './schema';

async function validationUsers(req: Request, res: Response, next: NextFunction) {
  const { error } = validationSchema.user.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  next();
}

export default validationUsers;