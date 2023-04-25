import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../Interfaces';

function tokenGenerator(payload: IUser) {
  const secret: string = process.env.JWT_SECRET || 'secret';
  const config: SignOptions = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, config);
  return token;
}

export default {
  tokenGenerator,
};