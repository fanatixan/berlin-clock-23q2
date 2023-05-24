const app = require('./src/app');

const port = process.env.SERVER_PORT;

const server = app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

module.exports = server;
