import { NextFunction, Request, Response } from 'express';
import interfacesUser from '../interfaces/interfacesUser';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username }: interfacesUser = req.body;

  if (!username) return res.status(400).json({ error: 'Username is required' });
  next();
};

export default validateUsername;
