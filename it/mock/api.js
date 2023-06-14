const axios = require('axios');

const defaultBaseUrl = 'http://localhost:9080';

const api = (baseUrl = defaultBaseUrl) => ({
  health: () =>
    axios.get(`${baseUrl}/health`).then((response) => response.status),
});

module.exports = api;
