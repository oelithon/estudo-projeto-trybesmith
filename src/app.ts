import express from 'express';
import controllerUser from './controllers/controllerUser';

const app = express();

app.use(express.json());

app
  .route('/users')
  .post(controllerUser);

export default app;
