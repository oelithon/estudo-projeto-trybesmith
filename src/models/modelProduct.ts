import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/interfaceProduct';

const create = async (product: Product) => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`,
    [name, amount],
  );

  return result.insertId;
};

export default create;
