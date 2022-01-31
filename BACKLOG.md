# US1 - Seconds

```
As a pedestrian
I want to have an light light in the top row
So that I can read the parity of the seconds of the time
```

## UAT 1.1 - Odd Seconds

```
Given <time> with odd seconds
When taking a look at the Berlin Clock
Then the top indicator light is unlit

Examples:
  | time     |
  | 12:00:01 |
  | 13:00:03 |
```

## UAT 1.2 - Even Seconds

```
Given <time> with even seconds
When taking a look at the Berlin Clock
Then the top indicator light is lit

Examples:
  | time     |
  | 12:00:02 |
  | 13:00:04 |
```

# US2 - 5 Hours

```
As a pedestrian
I want to have row of lights for 5 hours
So that I'll roughly know where we are at in the day
```

## UAT 2.1 - 5 Hours

```
Given <time>
When taking a look at the Berlin Clock
Then the second row of lights shows <pattern>

Examples:
  | time     | pattern |
  | 00:21:40 |    OOOO |
  | 01:55:43 |    OOOO |
  | 04:29:21 |    OOOO |
  | 05:32:52 |    ROOO |
  | 06:33:51 |    ROOO |
  | 09:41:49 |    ROOO |
  | 10:54:28 |    RROO |
  | 11:56:19 |    RROO |
  | 14:01:45 |    RROO |
  | 15:13:25 |    RRRO |
  | 16:09:33 |    RRRO |
  | 19:49:22 |    RRRO |
  | 20:47:12 |    RRRR |
  | 21:38:15 |    RRRR |
```

# US3 - 1 Hour

```
As a pedestrian
I want to have row of lights for hours
So that I'll know more preciesly where we are at in the day
```

## UAT 3.1 - 1 Hour

```
Given <time>
When taking a look at the Berlin Clock
Then the third row of lights shows <pattern>

Examples:
  | time     | pattern |
  | 00:21:40 |    OOOO |
  | 01:55:43 |    ROOO |
  | 02:35:41 |    RROO |
  | 04:29:21 |    RRRR |
  | 05:32:52 |    0OOO |
  | 06:33:51 |    ROOO |
```

# US4 - 5 Minutes

```
As a pedestrian
I want to have row of lights for 5 minutes
So that I'll roughly know where we are at in the hour
```

# UAT 4.1 - 5 Minutes

```
Given <time>
When taking a look at the Berlin Clock
Then the fourth row of lights shows <pattern>

Examples:
  | time     | pattern |
:
  @TODO
```

# US5 - 1 minute

```
As a pedestrian
I want to have row of lights for minutes
So that I'll know more preciesly where we are at in the hour
```

## UAT 5.1 - 1 Hour

```
Given <time>
When taking a look at the Berlin Clock
Then the fifth row of lights shows <pattern>

Examples:
  | time     | pattern |
  @TODO
```
