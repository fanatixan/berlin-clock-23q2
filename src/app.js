const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/health', (_, response) => response.sendStatus(200));

app.get('/to-berlin-time/:time', (_, response) => response.json({}));

module.exports = app;
