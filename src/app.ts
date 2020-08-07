process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

import express = require('express');
import { loadControllers } from 'awilix-express';

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Running ...');
});

import { container } from './container';

app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __filename }
));
export { app };