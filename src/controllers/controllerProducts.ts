import dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import serviceProduct from '../services/serviceProduct';
import Product from '../interfaces/interfaceProduct';

dotenv.config();

const authenticate = {
  mySecrete: String(process.env.JWT_SECRET),
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { name, amount }: Product = req.body;

    if (!authorization) return res.status(401).json({ error: 'Token not found' });

    jwt.verify(authorization, authenticate.mySecrete);

    const productId = await serviceProduct.create({ name, amount });
    const productCreated = {
      item: {
        id: productId,
        name,
        amount,
      },
    };

    return res.status(201).json(productCreated);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ error: 'Token not found' });

    jwt.verify(authorization, authenticate.mySecrete);

    const products = await serviceProduct.allProducts();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export = {
  createProduct,
  getAllProducts,
};
