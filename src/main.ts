import App from './app';
import config from './config';
import RequestsRouter from './router/requests/requests.router';
import StatusRouter from './router/status/status.router';

const app = new App(
  [
    new RequestsRouter,
    new StatusRouter,
  ],
  config.port,
);
 
app.listen();

export default app;
