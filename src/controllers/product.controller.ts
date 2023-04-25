import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const newProduct = await productService.createProduct(req.body);
  return res.status(201).json(newProduct);
}

async function findAllProduct(req: Request, res: Response) {
  const products = await productService.findAllProduct();
  return res.status(200).json(products);
}

export default {
  createProduct,
  findAllProduct,
};