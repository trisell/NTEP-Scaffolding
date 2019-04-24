import config from './config';
import logger from './lib/logger';
import router from './router';

const app = router;

app.listen(config.port);

logger.info(`Server started. Listening on ${config.port}`);
