import connection from './connection';
import Product from '../interfaces/interfaceProduct';

const create = async (product: Product) => {
  const { name, amount } = product;
  await connection.execute(
    `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`,
    [name, amount],
  );
};

export default create;
