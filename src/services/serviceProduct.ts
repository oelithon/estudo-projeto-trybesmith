import modelProduct from '../models/modelProduct';
import Product from '../interfaces/interfaceProduct';

const create = async (product: Product) => {
  const { name, amount } = product;
  const productId = await modelProduct({ name, amount });

  return productId;
};

export default create;
