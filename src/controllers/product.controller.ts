import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const newProduct = await productService.createProduct(req.body);
  return res.status(201).json(newProduct);
}

export default {
  createProduct,
};