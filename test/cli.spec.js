const { toEmoji } = require('../src/cli');

describe('Given a CLI interface', () => {
  describe('When having a red light', () => {
    test('Then 🔴 is printed to the console', () => {
      expect(toEmoji('R')).toBe('🔴');
    });
  });

  describe('When having a yellow light', () => {
    test('Then 🟡 is printed to the console', () => {
      expect(toEmoji('Y')).toBe('🟡');
    });
  });

  describe('When having an off light', () => {
    test('Then ⚪ is printed to the console', () => {
      expect(toEmoji('O')).toBe('⚪');
    });
  });
});
