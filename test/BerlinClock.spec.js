const toBerlinTime = require('../src/BerlinClock');

describe('Berlin Clock', () => {
  test.each`
    input
    ${'12:00:01'}
  `('should have an unlit second light for ($input)', ({ input }) => {
    expect(toBerlinTime(input).seconds).toBe('O');
  });
});
