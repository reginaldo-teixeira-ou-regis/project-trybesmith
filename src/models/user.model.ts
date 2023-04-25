import { ResultSetHeader } from 'mysql2';
import { User, Login } from '../types';
import connection from './connection';

async function createUser(user: User): Promise<User> {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES(?, ?, ?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [username, vocation, level, password],
  );
  const { insertId: id } = result;

  const newUser: User = { id, ...user };
  return newUser;
}

async function userLogin(user: Login): Promise<User | undefined> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const [data] = await connection.execute(query, [user.username]);
  const [userData] = data as User[];
  return userData as User | undefined;
}

export default {
  createUser,
  userLogin,
};