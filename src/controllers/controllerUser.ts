import dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import interfacesUser from '../interfaces/interfacesUser';
import serviceUser from '../services/serviceUser';

dotenv.config();

const authenticate = {
  mySecrete: String(process.env.JWT_SECRET),
};

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password }: interfacesUser = req.body;

  await serviceUser.create({ username, classe, level, password });

  const token = jwt.sign({ id: 1, username }, authenticate.mySecrete, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  return res.status(201).json({ token });
};

export default createUser;
