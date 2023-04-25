import { ResultSetHeader } from 'mysql2';
import { User } from '../types/User';
import connection from './connection';

async function createUser(user: User): Promise<User> {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = result;

  const newUser: User = { id, ...user };
  return newUser;
}

export default {
  createUser,
};