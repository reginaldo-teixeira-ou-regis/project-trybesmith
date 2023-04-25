import { Order } from '../types';
import connection from './connection';

async function findAllOrders(): Promise<Order[]> {
  const query = `SELECT ord.id as id, ord.user_id as userId, 
  JSON_ARRAYAGG(prdt.id) as productsIds 
  FROM Trybesmith.orders AS ord 
  INNER JOIN Trybesmith.products AS prdt ON ord.id = prdt.order_id
  GROUP BY ord.id`;
  const [orders] = await connection.execute(query);
  return orders as Order[];
}

export default {
  findAllOrders,
};