import { ResultSetHeader } from 'mysql2';
import { Product } from '../types/Product';
import connection from './connection';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

// [data, buffer] => retorno do execute

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

export default {
  createProduct,
};