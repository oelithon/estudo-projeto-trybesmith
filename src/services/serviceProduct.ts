import modelProduct from '../models/modelProduct';
import Product from '../interfaces/interfaceProduct';

const create = async (product: Product) => {
  const { name, amount } = product;
  const productId = await modelProduct.create({ name, amount });

  return productId;
};

const allProducts = async () => {
  const products = await modelProduct.allProducts();

  return products;
};

export = {
  create,
  allProducts,
};
