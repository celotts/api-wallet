import { createContainer, asClass } from 'awilix';
import { Testservice } from './services/test.service';
import express = require('express');
import { scopePerRequest } from 'awilix-express';

export default (app: express.Application) => {
    const container = createContainer();

    container.register({
        testService: asClass(Testservice).scoped()
    });

    app.use(scopePerRequest(container));
};