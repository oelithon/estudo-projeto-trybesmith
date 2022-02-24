import modelProduct from '../models/modelProduct';
import Product from '../interfaces/interfaceProduct';

const create = async (product: Product) => {
  const { name, amount } = product;
  await modelProduct({ name, amount });
};

export default create;
