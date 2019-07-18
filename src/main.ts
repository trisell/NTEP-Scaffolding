import App from './app';
import config from './ormconfig';
import logger from './lib/logger';
import validateEnv from './lib/validateEnv';
import StatusRouter from './router/status/status.router';
import { createConnection } from 'typeorm';

validateEnv();

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    logger.error('Error while connecting to the database');
    return error;
  }
  const app = new App(
    [
      new StatusRouter(),
    ],
  );
  app.listen();
})();
