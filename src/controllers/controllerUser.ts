import dotenv from 'dotenv';

import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';

dotenv.config();

const authenticate = {
  mySecrete: String(process.env.JWT_SECRET),
};

interface Body {
  username: string;
  classe: string;
  level: number;
  password: string;
}

const createUser = async (req: Request, res: Response) => {
  const { username }: Body = req.body;

  const token = jwt.sign({ username }, authenticate.mySecrete, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  res.status(201).json(token);
};

export default createUser;
