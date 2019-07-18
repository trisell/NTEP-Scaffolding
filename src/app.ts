import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Application } from 'express';
import Route from './interfaces/route.interface';
import logger from './lib/logger';

class App {
    public app: Application;
    public port: number;
    constructor(routes: Route[]) {
      this.app = express();
      this.initializeMiddleware();
      this.initializeRoutes(routes);
    }

    public getServer() {
      return this.app;
    }

    public listen() {
      // This is to allow Jest to run test and clean up the server after tests.
      this.app.listen(process.env.PORT, () => {
        logger.info(`App listening on the port ${process.env.PORT}`);
      });
    }

    private initializeMiddleware() {
      this.app.use(bodyParser.json());
    }

    private initializeRoutes(routes: any) {
      routes.forEach((route: any) => {
        this.app.use('/', route.router);
      });
    }
}

export default App;
