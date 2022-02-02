const toBerlinTime = require('../src/BerlinClock');

describe('Berlin Clock', () => {
  test.each`
    input
    ${'12:00:01'}
    ${'13:00:03'}
  `('should have an unlit second light for ($input)', ({ input }) => {
    expect(toBerlinTime(input).seconds).toBe('O');
  });

  test.each`
    input
    ${'12:00:02'}
  `('should have a lit second light for ($input)', ({ input }) => {
    expect(toBerlinTime(input).seconds).toBe('Y');
  });
});
