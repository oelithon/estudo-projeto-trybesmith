import { NextFunction, Request, Response } from 'express';
import interfacesUser from '../interfaces/interfacesUser';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username }: interfacesUser = req.body;
  const message = { error: 'Username is required' };

  if (!username) return res.status(400).json(message);
  next();
};

const validateUsernameString = (req: Request, res: Response, next: NextFunction) => {
  const { username }: interfacesUser = req.body;
  const message = { error: 'Username must be a string' };

  if (typeof username !== 'string') return res.status(422).json(message);
  next();
};

const validateUsernameLength = (req: Request, res: Response, next: NextFunction) => {
  const { username }: interfacesUser = req.body;
  const message = { error: 'Username must be longer than 2 characters' };

  if (username.length < 3) return res.status(422).json(message);
  next();
};

export = {
  validateUsername,
  validateUsernameString,
  validateUsernameLength,
};
