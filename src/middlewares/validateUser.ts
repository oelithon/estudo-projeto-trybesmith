import { NextFunction, Request, Response } from 'express';
import interfacesUser from '../interfaces/interfacesUser';

export const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username }: interfacesUser = req.body;
  const message = { error: 'Username is required' };

  if (!username) return res.status(400).json(message);
  next();
};

export const validateUsernameString = (req: Request, res: Response, next: NextFunction) => {
  const { username }: interfacesUser = req.body;
  const message = { error: 'Username must be a string' };

  if (username !== typeof String) return res.status(422).json(message);
  next();
};
