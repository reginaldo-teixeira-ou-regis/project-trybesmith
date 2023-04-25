import { ResultSetHeader } from 'mysql2';
import { User } from '../types/User';
import connection from './connection';
import { Login } from '../types/Login';

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

async function login(user: Login): Promise<User | undefined> {
  const [data] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [user.username],
  );
  const [userData] = data as User[];
  return userData as User | undefined;
}

export default {
  createUser,
  login,
};