import { route, GET } from 'awilix-express';
import { Response, Request } from 'express';

@route('/')
export class DefaultController {
    @GET()
    public index(req: Request, res: Response): void {
        res.send({
            NODE_ENV: process.env.NODE_ENV,
            APP_ENV: process.env.APP_ENV

        });
    }
}