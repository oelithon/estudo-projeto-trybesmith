import dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import interfacesUser from '../interfaces/interfacesUser';

dotenv.config();

const authenticate = {
  mySecrete: String(process.env.JWT_SECRET),
};

const createUser = async (req: Request, res: Response) => {
  const { username }: interfacesUser = req.body;

  const token = jwt.sign({ id: 1, username }, authenticate.mySecrete, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  return res.status(201).json({ token });
};

export default createUser;
