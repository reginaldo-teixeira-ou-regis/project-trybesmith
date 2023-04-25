import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IToken, IUserRole } from '../Interfaces';
import StatusCodes from '../utils/StatusCodes';

async function validationToken(req: IUserRole, res: Response, next: NextFunction) {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }
    const verification = <IToken> jwt.verify(token, 'secret');
    req.user = verification;
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
}

export default validationToken;