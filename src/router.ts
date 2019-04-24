import { Application, Request, Response } from 'express';
import * as express from 'express';

const router: Application  = express();

router.get('/', (request: Request, response: Response) => {
  response.send('Hello');
});

export default router;
