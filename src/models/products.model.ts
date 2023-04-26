import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products } from '../interface/product.interface';

const createProducts = async (product: Products) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products (name, amount)
       VALUES (?, ?)`,
    [product.name, product.amount],
  );
  return { id: insertId, ...product };
};

async function getAll(): Promise<Products[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products;');
  return rows as Products[];
}

export default {
  createProducts,
  getAll,
};