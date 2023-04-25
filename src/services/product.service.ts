import { Product } from '../types/Product';
import productModel from '../models/product.model';

async function createProduct(product: Product): Promise<Product | { message: string }> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

export default {
  createProduct,
};