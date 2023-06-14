const path = require('path');
const { versionFromGitTag } = require('@pact-foundation/absolute-version');
const { Verifier } = require('@pact-foundation/pact');

const server = require('../index');

const port = process.env.SERVER_PORT || 9080;
const baseUrl = `http://localhost:${port}`;

const providerOptions = {
  logLevel: 'INFO',
  providerBaseUrl: baseUrl,
  provider: 'BerlinClockApiProvider',
  providerVersion: versionFromGitTag(),
  matchingRules: {
    body: {},
  },
};

Object.assign(providerOptions, {
  pactUrls: [
    path.resolve(
      __dirname,
      '../pact/pacts/BerlinClockApiConsumer-BerlinClockApiProvider.json',
    ),
  ],
});

describe('Berlin Clock Provider', () => {
  afterAll(async () => {
    await server.close();
  });

  test('tests berlin clock api routes', () => {
    return expect(
      new Verifier(providerOptions).verifyProvider(),
    ).resolves.toBeTruthy();
    // const output = await new Verifier(providerOptions).verifyProvider();
    // console.log(output);
    // expect(output).toContain('0 failures');
  });
});
