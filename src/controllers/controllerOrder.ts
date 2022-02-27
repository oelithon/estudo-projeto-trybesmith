import { Request, Response } from 'express';
import Sale from '../interfaces/interfaceOrder';

const createOrder = (req: Request, res: Response) => {
  const { products } = req.body as Sale;

  return res.status(201).json({ order: { userId: 1, products } });
};

export default createOrder;
