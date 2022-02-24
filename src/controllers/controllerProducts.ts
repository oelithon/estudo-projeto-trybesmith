import { Request, Response } from 'express';
import serviceProduct from '../services/serviceProduct';
import Product from '../interfaces/interfaceProduct';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount }: Product = req.body;

  const productId = await serviceProduct({ name, amount });
  const productCreated = {
    item: {
      id: productId,
      name,
      amount,
    },
  };

  return res.status(201).json(productCreated);
};

export default createProduct;
