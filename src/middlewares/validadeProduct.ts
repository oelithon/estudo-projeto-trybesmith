import { Request, Response, NextFunction } from 'express';
import Product from '../interfaces/interfaceProduct';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name }: Product = req.body;
  const message = { error: 'Name is required' };

  if (!name) return res.status(400).json(message);
  next();
};

export = {
  validateName,
};
