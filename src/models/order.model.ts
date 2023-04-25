import { Order } from '../types/Order';
import connection from './connection';

async function findOrders(): Promise<Order[]> {
  const [orders] = await connection.execute(
    `SELECT ord.id as id, ord.user_id as userId, JSON_ARRAYAGG(prdt.id) as productsIds 
    FROM Trybesmith.orders AS ord 
    INNER JOIN Trybesmith.products AS prdt ON ord.id = prdt.order_id
    GROUP BY ord.id`,
  );
  return orders as Order[];
}

export default {
  findOrders,
};