import { User, Login } from '../types';
import userModel from '../models/user.model';
import JWT from '../utils/JWT';
import validationSchema from '../middlewares/schema';

async function createUser(user: User): Promise<string> {
  const newUser = await userModel.createUser(user);
  const token = JWT.tokenGenerator(newUser);
  return token;
}

async function userLogin(user: Login): Promise<string | { message: string, status: number }> {
  const { error } = validationSchema.login.validate(user);
  if (error) return { message: error.message, status: 400 };

  const data = await userModel.userLogin(user);
  if (!data || data.password !== user.password) {
    return { message: 'Username or password invalid', status: 401 };
  }

  const token = JWT.tokenGenerator({ id: data.id, username: data.username });
  return token;
}

export default {
  createUser,
  userLogin,
};