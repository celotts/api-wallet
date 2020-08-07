process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log("ver---", process.env.APP_FOO);

import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Running ...');
});
export { app };