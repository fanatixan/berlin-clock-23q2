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
    ${'02:35:41'} | ${'RROO'}
    ${'04:29:21'} | ${'RRRR'}
    ${'05:32:52'} | ${'OOOO'}
    ${'06:33:51'} | ${'ROOO'}
  `(
    'should have pattern ($expected) for the one hour light for ($input)',
    ({ input, expected }) => {
      expect(toBerlinTime(input).oneHour).toBe(expected);
    },
  );

  test.each`
    input         | expected
    ${'00:00:00'} | ${'OOOOOOOOOOO'}
    ${'07:04:15'} | ${'OOOOOOOOOOO'}
    ${'04:05:06'} | ${'YOOOOOOOOOO'}
    ${'11:09:53'} | ${'YOOOOOOOOOO'}
    ${'23:10:24'} | ${'YYOOOOOOOOO'}
    ${'19:14:42'} | ${'YYOOOOOOOOO'}
    ${'16:15:33'} | ${'YYROOOOOOOO'}
    ${'18:19:38'} | ${'YYROOOOOOOO'}
    ${'05:20:01'} | ${'YYRYOOOOOOO'}
    ${'03:24:38'} | ${'YYRYOOOOOOO'}
    ${'12:25:10'} | ${'YYRYYOOOOOO'}
    ${'23:29:50'} | ${'YYRYYOOOOOO'}
    ${'04:30:07'} | ${'YYRYYROOOOO'}
    ${'15:34:22'} | ${'YYRYYROOOOO'}
    ${'17:35:12'} | ${'YYRYYRYOOOO'}
    ${'11:39:02'} | ${'YYRYYRYOOOO'}
    ${'07:40:01'} | ${'YYRYYRYYOOO'}
    ${'22:44:07'} | ${'YYRYYRYYOOO'}
    ${'08:45:14'} | ${'YYRYYRYYROO'}
    ${'15:49:01'} | ${'YYRYYRYYROO'}
    ${'20:50:04'} | ${'YYRYYRYYRYO'}
    ${'01:54:12'} | ${'YYRYYRYYRYO'}
    ${'10:55:31'} | ${'YYRYYRYYRYY'}
    ${'12:59:47'} | ${'YYRYYRYYRYY'}
  `(
    'should have pattern ($expected) for the five minutes lights for ($input)',
    ({ input, expected }) => {
      expect(toBerlinTime(input).fiveMinutes).toBe(expected);
    },
  );
});
