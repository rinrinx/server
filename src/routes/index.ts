// Initialization
import express from 'express';

// Middlewares
import {
  checkSecretPass,
  checkSetupComplete,
  checkSetupNotComplete,
} from '@plugins/server/middlewares';

// Others
import path from 'path';
import { EndpointGenerator } from '@plugins/server/generators';

// Routes
import setup from './setup';
import login from './login';

// Router
const router = express.Router();

// Assign Main Routes
router.use('/setup', [checkSecretPass, checkSetupNotComplete], setup);
router.use('/login', [checkSetupComplete], login);

// Default Get
router.get(/(\/.*)+/, (req, res) => {
  console.log(process.env.NODE_ENV);
  const viewsPath =
    process.env.NODE_ENV === 'development'
      ? '../views/index.html'
      : 'views/index.html';
  res.status(200).sendFile(path.resolve(__dirname, viewsPath));
});

// Respond with all the Endpoints in this Route
router.post('/endpoints', (req, res) =>
  new EndpointGenerator(res, router).serve(),
);

export default router;
