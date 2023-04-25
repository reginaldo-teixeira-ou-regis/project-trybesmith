import { User } from '../types/User';
import userModel from '../models/user.model';
import authMiddleware from '../middlewares/auth.middleware';
import { Login } from '../types/Login';
import validationSchema from '../middlewares/validationSchema';

async function createUser(user: User): Promise<string> {
  const newUser = await userModel.createUser(user);
  const token = authMiddleware.tokenGenerator(newUser);
  return token;
}

async function login(user: Login): Promise<string | { message: string, status: number }> {
  const { error } = validationSchema.login.validate(user);
  if (error) return { message: error.message, status: 400 };

  const data = await userModel.login(user);
  if (!data || data.password !== user.password) {
    return { message: 'Username or password invalid', status: 401 };
  }

  const token = authMiddleware.tokenGenerator({ id: data.id, username: data.username });
  return token;
}

export default {
  createUser,
  login,
};