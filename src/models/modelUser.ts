import connection from './connection';
import interfacesUser from '../interfaces/interfacesUser';
import interfaceLogin from '../interfaces/interfaceLogin';

const create = async (user: interfacesUser) => {
  const { username, classe, level, password } = user;
  await connection.execute(
    `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, 
    [username, classe, level, password],
  );
};

const getUser = async (login: interfaceLogin) => {
  const { username, password } = login;

  const [users] = await connection.execute(`
    SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?
    `, [username, password]);

  return users;
};

export = {
  create,
  getUser,
};
