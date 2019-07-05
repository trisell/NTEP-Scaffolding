import * as bodyParser from 'body-parser';
import { Application, Request, Response } from 'express';
import * as express from 'express';
import routeLogger from '../middleware/routeLogger';

const router: Application  = express();

// Route logger to output all routes accessed by users
router.use(routeLogger);

// Use Body Parser to be able to get json from request bodies easily
router.use(bodyParser.json());

// Status endpoint for service checks to verify the status of the application.
// Should be fleshed out to do full checks of service connections such as DBs.
router.get('/status', (request: Request, response: Response) => {
  response.send('Ok');
});

export default router;
