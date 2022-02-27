import express from 'express';

import controllerUser from './controllers/controllerUser';
import controllerLogin from './controllers/controllerLogin';
import controllerProduct from './controllers/controllerProducts';
import controllerSale from './controllers/controllerSales';

import user from './middlewares/validateUser';
import product from './middlewares/validadeProduct';

const app = express();

app.use(express.json());

app
  .route('/login')
  .post(
    user.validateUsername,
    user.validatePassword,
    controllerLogin,
  );

app
  .route('/users')
  .post(
    user.validateUsername,
    user.validateUsernameString,
    user.validateUsernameLength,
    user.validateClasse,
    user.validateClasseString,
    user.validateClasseLength,
    user.validateLevel,
    user.validateLevelNumber,
    user.validateLevelMaiorQueZero,
    user.validatePassword,
    user.validatePasswordString,
    user.validatePasswordLength,
    controllerUser,
  );
  
app
  .route('/products')
  .get(controllerProduct.getAllProducts)
  .post(
    product.validateName,
    product.validateNameString,
    product.validateNameLength,
    product.validateAmount,
    product.validateAmountString,
    product.validateAmountLength,
    controllerProduct.createProduct,
  );

app
  .route('/orders')
  .post(controllerSale);

export default app;
