jest.mock('../src/BerlinClock');

const toBerlinTime = require('../src/BerlinClock');
const { cli, lightToEmoji, rowToEmoji } = require('../src/cli');

describe('Given a CLI interface', () => {
  describe('When having a red light', () => {
    test('Then 🔴 is printed to the console', () => {
      expect(lightToEmoji('R')).toBe('🔴');
    });
  });

  describe('When having a yellow light', () => {
    test('Then 🟡 is printed to the console', () => {
      expect(lightToEmoji('Y')).toBe('🟡');
    });
  });

  describe('When having an off light', () => {
    test('Then ⚪ is printed to the console', () => {
      expect(lightToEmoji('O')).toBe('⚪');
    });
  });

  describe('When having a row of lights', () => {
    test.each`
      input            | expected
      ${'R'}           | ${'🔴'}
      ${'Y'}           | ${'🟡'}
      ${'RROO'}        | ${'🔴🔴⚪⚪'}
      ${'YYYO'}        | ${'🟡🟡🟡⚪'}
      ${'YYRYYROOOOO'} | ${'🟡🟡🔴🟡🟡🔴⚪⚪⚪⚪⚪'}
    `(
      'Then each light of $input is converted to emojis $expected',
      ({ input, expected }) => {
        expect(rowToEmoji(input)).toBe(expected);
      },
    );
  });

  describe('When having a full clock', () => {
    test('Then it is converted to an emoji representation', () => {
      toBerlinTime.mockReturnValue({
        seconds: 'Y',
        fiveHours: 'RROO',
        oneHour: 'RROO',
        fiveMinutes: 'YYRYYROOOOO',
        oneMinute: 'YYYY',
      });
      expect(cli('12:34:56')).toBe(
        '🟡\n🔴🔴⚪⚪\n🔴🔴⚪⚪\n🟡🟡🔴🟡🟡🔴⚪⚪⚪⚪⚪\n🟡🟡🟡🟡',
      );
    });
  });
});
