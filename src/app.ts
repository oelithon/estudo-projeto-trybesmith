import express from 'express';
import controllerUser from './controllers/controllerUser';

import validateUsername from './middlewares/validateUser';

const app = express();

app.use(express.json());

app
  .route('/users')
  .post(
    validateUsername,
    controllerUser,
  );

export default app;
