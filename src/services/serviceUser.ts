import interfacesUser from '../interfaces/interfacesUser';
import modelUser from '../models/modelUser';

const create = async (user: interfacesUser) => {
  const { username, classe, level, password } = user;

  await modelUser({ username, classe, level, password });
};

export default create;
