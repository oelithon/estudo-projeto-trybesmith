import { UserId } from '../interfaces/interfacesUser';
import connection from './connection';

const createOrder = async (id: UserId) => {
  await connection.execute(`INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`, [id]);
};

export default createOrder;
