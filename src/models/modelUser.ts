import connection from './connection';
import { Body, UserId } from '../interfaces/interfacesUser';
import interfaceLogin from '../interfaces/interfaceLogin';

const create = async (user: Body) => {
  const { username, classe, level, password } = user;
  await connection.execute(
    `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, 
    [username, classe, level, password],
  );
};

const getUser = async (login: interfaceLogin): Promise<UserId> => {
  const { username, password } = login;

  const [users] = await connection.execute(`
    SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?
    `, [username, password]);
  const [rows] = users as UserId[]; // pesquisar essa linha | https://github.com/tryber/sd-014-typescript-crud-mysql/tree/master/models
  return rows;
};

export = {
  create,
  getUser,
};
