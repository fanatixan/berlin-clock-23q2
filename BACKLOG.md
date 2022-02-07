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
  | 05:32:52 |    OOOO |
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
  | time     | pattern     |
  | 00:00:00 | OOOOOOOOOOO |
  | 07:04:15 | OOOOOOOOOOO |
  | 04:05:06 | YOOOOOOOOOO |
  | 11:09:53 | YOOOOOOOOOO |
  | 23:10:24 | YYOOOOOOOOO |
  | 19:14:42 | YYOOOOOOOOO |
  | 16:15:33 | YYROOOOOOOO |
  | 18:19:38 | YYROOOOOOOO |
  | 05:20:01 | YYRYOOOOOOO |
  | 03:24:38 | YYRYOOOOOOO |
  | 12:25:10 | YYRYYOOOOOO |
  | 23:29:50 | YYRYYOOOOOO |
  | 04:30:07 | YYRYYROOOOO |
  | 15:34:22 | YYRYYROOOOO |
  | 17:35:12 | YYRYYRYOOOO |
  | 11:39:02 | YYRYYRYOOOO |
  | 07:40:01 | YYRYYRYYOOO |
  | 22:44:07 | YYRYYRYYOOO |
  | 08:45:14 | YYRYYRYYROO |
  | 15:49:01 | YYRYYRYYROO |
  | 20:50:04 | YYRYYRYYRYO |
  | 01:54:12 | YYRYYRYYRYO |
  | 10:55:31 | YYRYYRYYRYY |
  | 12:59:47 | YYRYYRYYRYY |
```

# US5 - 1 minute

```
As a pedestrian
I want to have row of lights for minutes
So that I'll know more preciesly where we are at in the hour
```

## UAT 5.1 - 1 Minute

```
Given <time>
When taking a look at the Berlin Clock
Then the fifth row of lights shows <pattern>

Examples:
  | time     | pattern |
  | 00:00:00 |    OOOO |
  | 07:01:15 |    YOOO |
  | 04:02:06 |    YYOO |
  | 11:03:53 |    YYYO |
  | 23:04:24 |    YYYY |
  | 19:05:42 |    OOOO |
  | 16:16:33 |    YOOO |
  | 18:37:38 |    YYOO |
  | 05:48:01 |    YYYO |
  | 03:19:38 |    YYYY |
```

----

# US6 - Health check endpoint

```
As a monitor
I want to check the status of the app
So that I can ensure that it is online
```

## UAT6.1 - Health route

```
Given a running app
When I call GET /health
Then I get an HTTP OK
```

# US7 - Timestamp convertor endpoint

```
As an API consumer
I want send a timestamp to the app
So that I can receive the timestamp in Berlin clock format
```

## UAT7.1 - Successful return of Berlin clock time

```
Given a time <time>
When I call GET /to-berlin-time/<time>
Then I get an HTTP OK

Examples:
  | time     | 
  | 00:00:00 | 
```

## UAT7.2 - 

```
Given a time <time>
When I call GET /to-berlin-time/<time>
Then I get a JSON object 
And it has a field with name seconds
And it has a field with name fiveHours
And it has a field with name oneHour
And it has a field with name fiveMinutes 
And it has a field with name oneMinute

Examples:
  | time     | 
  | 00:00:00 | 
```
