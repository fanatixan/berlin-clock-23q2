const { lightToEmoji, rowToEmoji } = require('../src/cli');

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
      input     | expected
      ${'R'}    | ${'🔴'}
      ${'Y'}    | ${'🟡'}
      ${'RROO'} | ${'🔴🔴⚪⚪'}
    `(
      'Then each light of $input is converted to emojis $expected',
      ({ input, expected }) => {
        expect(rowToEmoji(input)).toBe(expected);
      },
    );
  });
});
