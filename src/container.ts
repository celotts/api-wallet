import express = require('express');
import { createContainer, asClass } from 'awilix';
import { TestService } from './services/test.service';
import { scopePerRequest } from 'awilix-express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        testService: asClass(TestService).scoped()
    });

    app.use(scopePerRequest(container));
};