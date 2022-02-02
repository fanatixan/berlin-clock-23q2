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
    ${'13:00:04'}
  `('should have a lit second light for ($input)', ({ input }) => {
    expect(toBerlinTime(input).seconds).toBe('Y');
  });

  test.each`
    input         | expected
    ${'00:21:40'} | ${'OOOO'}
    ${'05:32:52'} | ${'ROOO'}
    ${'06:33:51'} | ${'ROOO'}
  `(
    'should have pattern ($expected) for the five hour light for ($input)',
    ({ input, expected }) => {
      expect(toBerlinTime(input).fiveHours).toBe(expected);
    },
  );
});
