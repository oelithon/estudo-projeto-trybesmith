import interfacesUser from '../interfaces/interfacesUser';
import interfaceLogin from '../interfaces/interfaceLogin';
import modelUser from '../models/modelUser';

const create = async (user: interfacesUser) => {
  const { username, classe, level, password } = user;

  await modelUser.create({ username, classe, level, password });
};

const getUser = async (login: interfaceLogin) => {
  const { username, password } = login;

  const userSelected = await modelUser.getUser({ username, password });
  return userSelected;
};

export = {
  create,
  getUser,
};
