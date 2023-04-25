import { Product } from '../types';
import productModel from '../models/product.model';

async function createProduct(product: Product): Promise<Product | { message: string }> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

async function findAllProduct(): Promise<Product[]> {
  const products = await productModel.findAllProduct();
  return products;
}

export default {
  createProduct,
  findAllProduct,
};