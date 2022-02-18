const CliTest = require('command-line-test');

describe('Given a terminal', () => {
  describe('When running the berlin clock CLI', () => {
    test('Then the emoji representation is printed on the standard output', async () => {
      const cliTest = new CliTest();
      const result = await cliTest.exec('node ./berlin-clock.js "12:34:56"');
      expect(result.stdout).toBe(
        '🟡\n🔴🔴⚪⚪\n🔴🔴⚪⚪\n🟡🟡🔴🟡🟡🔴⚪⚪⚪⚪⚪\n🟡🟡🟡🟡',
      );
    });
  });
});
