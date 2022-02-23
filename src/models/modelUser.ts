import connection from './connection';
import interfacesUser from '../interfaces/interfacesUser';

const create = async (user: interfacesUser) => {
  const { username, classe, level, password } = user;
  await connection.execute(
    `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, 
    [username, classe, level, password],
  );
};

export default create;
