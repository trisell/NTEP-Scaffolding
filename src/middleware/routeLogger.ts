import { NextFunction, Request, Response } from 'express';
import logger from '../lib/logger';

function routeLogger(request: Request, response: Response, next: NextFunction) {
    logger.info(`${request.method} - ${request.path}`);
    next();
};

export default routeLogger;
