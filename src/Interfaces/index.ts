import { Request } from 'express';

export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null
}

export interface IUser {
  id?: number,
  username: string,
  vocation?: string,
  level?: number,
  password?: string,
}

export interface ILogin {
  username: string,
  password: string,
}

export interface IOrder extends Request {
  id: number,
  userId: number,
  productsIds: number[],
}

export interface IToken extends Request {
  id: number,
  username: string,
}

export interface IUserRole extends Request {
  user?: IToken,
}