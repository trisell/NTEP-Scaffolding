import { Application } from 'express';
import config from './config';
import logger from './lib/logger';
import router from './router/router';

const app: Application = router;

if (!module.parent) {
  app.listen(config.port);
}

logger.info(`Server started. Listening on ${config.port}`);

export default app;
