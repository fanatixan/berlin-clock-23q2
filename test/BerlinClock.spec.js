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
    ${'01:55:43'} | ${'OOOO'}
    ${'04:29:21'} | ${'OOOO'}
    ${'05:32:52'} | ${'ROOO'}
    ${'06:33:51'} | ${'ROOO'}
    ${'09:41:49'} | ${'ROOO'}
    ${'10:54:28'} | ${'RROO'}
    ${'11:56:19'} | ${'RROO'}
    ${'14:01:45'} | ${'RROO'}
    ${'15:13:25'} | ${'RRRO'}
    ${'16:09:33'} | ${'RRRO'}
    ${'19:49:22'} | ${'RRRO'}
    ${'20:47:12'} | ${'RRRR'}
    ${'21:38:15'} | ${'RRRR'}
  `(
    'should have pattern ($expected) for the five hour light for ($input)',
    ({ input, expected }) => {
      expect(toBerlinTime(input).fiveHours).toBe(expected);
    },
  );

  test.each`
    input         | expected
    ${'00:21:40'} | ${'OOOO'}
    ${'01:55:43'} | ${'ROOO'}
  `(
    'should have pattern ($expected) for the one hour light for ($input)',
    ({ input, expected }) => {
      expect(toBerlinTime(input).oneHour).toBe(expected);
    },
  );
});
