import { Request, Response } from 'express';
import userService from '../services/user.service';

async function createUser(req: Request, res: Response) {
  const newUser = await userService.createUser(req.body);
  res.status(201).json({ token: newUser });
}

async function userLogin(req: Request, res: Response) {
  const token = await userService.userLogin(req.body);
  if (typeof token !== 'string') {
    return res.status(token.status).json({ message: token.message });
  }
  return res.status(200).json({ token });
}

export default {
  createUser,
  userLogin,
};