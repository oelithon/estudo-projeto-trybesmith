import dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import serviceUser from '../services/serviceUser';

dotenv.config();

const authenticate = {
  mySecrete: String(process.env.JWT_SECRET),
};

const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const userSelected = await serviceUser.getUser({ username, password });
  
  if (!userSelected) {
    const message = { error: 'Username or password invalid' };
    return res.status(401).json(message);
  }
  
  const { id, username: user } = userSelected;
  const token = jwt.sign({ id, username: user }, authenticate.mySecrete, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  return res.status(200).json({ token });
};

export default loginUser;
