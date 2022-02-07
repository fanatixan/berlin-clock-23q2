const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/health', (_, response) => response.sendStatus(200));

module.exports = app;
