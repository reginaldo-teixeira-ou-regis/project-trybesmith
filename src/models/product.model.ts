import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../Interfaces';
import connection from './connection';

async function createProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, ...product };
  return newProduct;
}

async function findAllProduct(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
}

export default {
  createProduct,
  findAllProduct,
};