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
    controllerUser,
  );

export default app;
