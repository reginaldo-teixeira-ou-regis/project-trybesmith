import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IToken, IUserRole } from '../Interfaces';

async function validationToken(req: IUserRole, res: Response, next: NextFunction) {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const verification = <IToken> jwt.verify(token, 'secret');
    req.user = verification;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default validationToken;