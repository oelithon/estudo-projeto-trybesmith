import { Request, Response, NextFunction } from 'express';
import Product from '../interfaces/interfaceProduct';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name }: Product = req.body;
  const message = { error: 'Name is required' };

  if (!name) return res.status(400).json(message);
  next();
};

const validateNameString = (req: Request, res: Response, next: NextFunction) => {
  const { name }: Product = req.body;
  const message = { error: 'Name must be a string' };

  if (typeof name !== 'string') return res.status(422).json(message);
  next();
};

const validateNameLength = (req: Request, res: Response, next: NextFunction) => {
  const { name }: Product = req.body;
  const message = { error: 'Name must be longer than 2 characters' };

  if (name.length < 3) return res.status(422).json(message);
  next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount }: Product = req.body;
  const message = { error: 'Amount is required' };

  if (!amount) return res.status(400).json(message);
  next();
};

const validateAmountString = (req: Request, res: Response, next: NextFunction) => {
  const { amount }: Product = req.body;
  const message = { error: 'Amount must be a string' };

  if (typeof amount !== 'string') return res.status(422).json(message);
  next();
};

export = {
  validateName,
  validateNameString,
  validateNameLength,
  validateAmount,
  validateAmountString,
};
