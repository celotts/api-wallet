import { route, GET } from 'awilix-express';
import { Response, Request } from 'express';
import { Testservice } from '../services/test.service';

@route('/')
export class DefaultController {
    constructor(private readonly testservice: Testservice) { }
    @GET()
    public index(req: Request, res: Response): void {
        res.send({
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV
        });
    }

    @GET()
    public test(req: Request, res: Response): void {
        res.send({
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV

        });
    }
}