const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const bcCli = require('../src/cli');

let timestamp;
let pattern;

Given(/^timestamp (.*)$/, (time) => {
  timestamp = time;
});

When('I pass it to the CLI as argument', () => {
  pattern = bcCli(timestamp);
});

Then(/([\s\S]*) is printed/, (expectedPattern) => {
  expect(pattern).toBe(expectedPattern);
});

Fusion('Cli.feature');
