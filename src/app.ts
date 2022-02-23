import express from 'express';
import controllerUser from './controllers/controllerUser';

import { validateUsername, validateUsernameString } from './middlewares/validateUser';

const app = express();

app.use(express.json());

app
  .route('/users')
  .post(
    validateUsername,
    validateUsernameString,
    controllerUser,
  );

export default app;
