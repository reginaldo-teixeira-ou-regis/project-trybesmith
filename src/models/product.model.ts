import { ResultSetHeader } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const newProduct: Product = { id, ...product };
  return newProduct;
}

async function findAllProduct(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as Product[];
}

export default {
  createProduct,
  findAllProduct,
};