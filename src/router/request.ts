import { Application, Request, Response } from 'express';
import * as express from 'express'

const request: Application = express();

request.post('/new', (req: Request, res: Response) => {
    
})

export default request;