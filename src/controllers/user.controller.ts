import { Request, Response } from 'express';
import userService from '../services/user.service';
import StatusCodes from '../utils/StatusCodes';

async function createUser(req: Request, res: Response) {
  const newUser = await userService.createUser(req.body);
  res.status(StatusCodes.CREATED).json({ token: newUser });
}

async function userLogin(req: Request, res: Response) {
  const token = await userService.userLogin(req.body);
  if (typeof token !== 'string') {
    return res.status(token.status).json({ message: token.message });
  }
  return res.status(StatusCodes.OK).json({ token });
}

export default {
  createUser,
  userLogin,
};