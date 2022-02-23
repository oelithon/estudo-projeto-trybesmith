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

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe }: interfacesUser = req.body;
  const message = { error: 'Classe is required' };

  if (!classe) return res.status(400).json(message);
  next();
};

const validateClasseString = (req: Request, res: Response, next: NextFunction) => {
  const { classe }: interfacesUser = req.body;
  const message = { error: 'Classe must be a string' };

  if (typeof classe !== 'string') return res.status(422).json(message);
  next();
};

const validateClasseLength = (req: Request, res: Response, next: NextFunction) => {
  const { classe }: interfacesUser = req.body;
  const message = { error: 'Classe must be longer than 2 characters' };

  if (classe.length < 3) return res.status(422).json(message);
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level }: interfacesUser = req.body;
  const message = { error: 'Level is required' };

  if (level === undefined) return res.status(400).json(message);
  next();
};

const validateLevelNumber = (req: Request, res: Response, next: NextFunction) => {
  const { level }: interfacesUser = req.body;
  const message = { error: 'Level must be a number' };

  if (typeof level !== 'number') return res.status(422).json(message);
  next();
};

const validateLevelMaiorQueZero = (req: Request, res: Response, next: NextFunction) => {
  const { level }: interfacesUser = req.body;
  const message = { error: 'Level must be greater than 0' };

  if (level === 0) return res.status(422).json(message);
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password }: interfacesUser = req.body;
  const message = { error: 'Password is required' };

  if (password === undefined) return res.status(400).json(message);
  next();
};

const validatePasswordString = (req: Request, res: Response, next: NextFunction) => {
  const { password }: interfacesUser = req.body;
  const message = { error: 'Password must be a string' };

  if (typeof password !== 'string') return res.status(422).json(message);
  next();
};

const validatePasswordLength = (req: Request, res: Response, next: NextFunction) => {
  const { password }: interfacesUser = req.body;
  const message = { error: 'Password must be longer than 7 characters' };

  if (password.length < 8) return res.status(422).json(message);
  next();
};

export = {
  validateUsername,
  validateUsernameString,
  validateUsernameLength,
  validateClasse,
  validateClasseString,
  validateClasseLength,
  validateLevel,
  validateLevelNumber,
  validateLevelMaiorQueZero,
  validatePassword,
  validatePasswordString,
  validatePasswordLength,
};
