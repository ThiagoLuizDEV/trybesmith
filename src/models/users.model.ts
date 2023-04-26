import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../interface/user.interface';

const createUser = async (user: Users) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
       VALUES (?, ?, ?, ?)`,
    [user.username, user.vocation, user.level, user.password],
  );
  return { id: insertId, ...user };
};

export default { 
  createUser, 
};