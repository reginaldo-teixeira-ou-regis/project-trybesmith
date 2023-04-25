import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../Interfaces';
import connection from './connection';

async function findAllOrders(): Promise<IOrder[]> {
  const query = `SELECT ord.id as id, ord.user_id as userId, 
  JSON_ARRAYAGG(prdt.id) as productsIds 
  FROM Trybesmith.orders AS ord 
  INNER JOIN Trybesmith.products AS prdt ON ord.id = prdt.order_id
  GROUP BY ord.id`;
  const [orders] = await connection.execute(query);
  return orders as IOrder[];
}

async function createNewOrder(
  order: { productsIds: number[] },
  userId: number,
): Promise<void> {
  const queryInsert = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(queryInsert, [userId]);
  const { insertId: id } = result;

  await Promise.all(order.productsIds.map(async (p) => {
    const queryUpdate = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    await connection.execute(queryUpdate, [id, p]);
  }));
}

export default {
  findAllOrders,
  createNewOrder,
};