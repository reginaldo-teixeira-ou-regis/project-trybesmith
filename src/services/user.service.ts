import { User } from '../types/User';
import userModel from '../models/user.model';
import authMiddleware from '../middlewares/auth.middleware';

async function createUser(user: User): Promise<string> {
  const newUser = await userModel.createUser(user);
  const token = authMiddleware.tokenGenerator(newUser);
  return token;
}

export default {
  createUser,
};