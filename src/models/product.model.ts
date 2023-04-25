import { ResultSetHeader } from 'mysql2';
import { Product } from '../types/Product';
import connection from './connection';

async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;

  const newProduct: Product = { id, ...product };
  return newProduct;
}

async function findAll(): Promise<Product[]> {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Product[];
}

export default {
  createProduct,
  findAll,
};