#!/usr/bin/node
// sets up express app

import express from 'express';
import router from './routes';

const port = 1245;

const app = express();

app.use(router);

app.listen(port, () => {});

export default app;
