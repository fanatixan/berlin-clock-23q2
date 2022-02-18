const { cli } = require('./src/cli-converter');

const args = process.argv;
const time = args[2];

console.log(cli(time));
