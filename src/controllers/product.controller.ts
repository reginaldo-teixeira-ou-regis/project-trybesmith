import { Request, Response } from 'express';
import productService from '../services/product.service';
import StatusCodes from '../utils/StatusCodes';

async function createProduct(req: Request, res: Response) {
  const newProduct = await productService.createProduct(req.body);
  return res.status(StatusCodes.CREATED).json(newProduct);
}

async function findAllProduct(req: Request, res: Response) {
  const products = await productService.findAllProduct();
  return res.status(StatusCodes.OK).json(products);
}

export default {
  createProduct,
  findAllProduct,
};