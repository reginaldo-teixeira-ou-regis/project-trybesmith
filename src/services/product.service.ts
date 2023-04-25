import { IProduct } from '../Interfaces';
import productModel from '../models/product.model';

async function createProduct(
  product: IProduct,
): Promise<IProduct | { message: string }> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

async function findAllProduct(): Promise<IProduct[]> {
  const products = await productModel.findAllProduct();
  return products;
}

export default {
  createProduct,
  findAllProduct,
};