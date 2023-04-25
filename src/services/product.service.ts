import { Product } from '../types/Product';
import productModel from '../models/product.model';

async function createProduct(product: Product): Promise<Product | { message: string }> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

async function findAll(): Promise<Product[]> {
  const products = await productModel.findAll();
  return products;
}

export default {
  createProduct,
  findAll,
};