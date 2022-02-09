const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const toBerlinTime = require('./BerlinClock');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/health', (_, response) => response.sendStatus(200));

app.get('/to-berlin-time/:time', (request, response) =>
  response.json(toBerlinTime(request.params.time)),
);

module.exports = app;
