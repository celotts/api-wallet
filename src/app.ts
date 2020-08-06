import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Running ...');
});
export { app };