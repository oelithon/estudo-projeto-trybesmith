import express from 'express';
import controllerUser from './controllers/controllerUser';
import controllerLogin from './controllers/controllerLogin';

import user from './middlewares/validateUser';

const app = express();

app.use(express.json());

app
  .route('/login')
  .post(controllerLogin);

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

export default app;
