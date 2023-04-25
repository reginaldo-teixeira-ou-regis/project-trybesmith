import { ResultSetHeader } from 'mysql2';
import { IUser, ILogin } from '../Interfaces';
import connection from './connection';

async function createUser(user: IUser): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users 
  (username, vocation, level, password) VALUES(?, ?, ?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [username, vocation, level, password],
  );
  const { insertId: id } = result;

  const newUser: IUser = { id, ...user };
  return newUser;
}

async function userLogin(user: ILogin): Promise<IUser | undefined> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const [data] = await connection.execute(query, [user.username]);
  const [userData] = data as IUser[];
  return userData as IUser | undefined;
}

export default {
  createUser,
  userLogin,
};