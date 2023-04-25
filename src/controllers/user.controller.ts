import { Request, Response } from 'express';
import userService from '../services/user.service';

async function createUser(req: Request, res: Response) {
  const newUser = await userService.createUser(req.body);
  res.status(201).json({ token: newUser });
}

export default {
  createUser,
};