import { IUser, ILogin } from '../Interfaces';
import userModel from '../models/user.model';
import jwtConfig from '../utils/jwtConfig';
import schema from '../middlewares/schema';

async function createUser(user: IUser): Promise<string> {
  const newUser = await userModel.createUser(user);
  const token = jwtConfig.tokenGenerator(newUser);
  return token;
}

async function userLogin(user: ILogin): Promise<string | {
  message: string, status: number
}> {
  const { error } = schema.loginSchema.validate(user);
  if (error) return { message: error.message, status: 400 };

  const data = await userModel.userLogin(user);
  if (!data || data.password !== user.password) {
    return { message: 'Username or password invalid', status: 401 };
  }

  const token = jwtConfig.tokenGenerator({ id: data.id, username: data.username });
  return token;
}

export default {
  createUser,
  userLogin,
};