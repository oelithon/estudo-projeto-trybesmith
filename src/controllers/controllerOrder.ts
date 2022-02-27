import dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
// import Sale from '../interfaces/interfaceOrder';

dotenv.config();

const authenticate = {
  mySecrete: String(process.env.JWT_SECRET),
};

const createOrder = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Token not found' });

  const decoded = await jwt.verify(authorization, authenticate.mySecrete);
  if (typeof decoded === 'string') return decoded;
  // const { products } = req.body as Sale;

  return res.status(201).json(decoded.id);
};

export default createOrder;
