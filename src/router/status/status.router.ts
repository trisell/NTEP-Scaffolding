import * as express from 'express';

class StatusRouter {
  public path = '/status';
  public router = express.Router();

  constructor() {
    this.intializeStatusRoutes();
  }

  public intializeStatusRoutes() {
    this.router.get(this.path, this.status);
  }

  private status = (req: express.Request, res: express.Response) => {
    res.send('Ok');
  }
}

export default StatusRouter;
