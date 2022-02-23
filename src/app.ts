import express from 'express';
import controllerUser from './controllers/controllerUser';

import user from './middlewares/validateUser';

const app = express();

app.use(express.json());

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
    controllerUser,
  );

export default app;
