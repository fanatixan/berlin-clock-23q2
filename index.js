const app = require('./src/app');

const port = 9080;

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
