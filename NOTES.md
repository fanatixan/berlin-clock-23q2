# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
TODO:

## Pomodoro 1

Driver: Gearóid  
Navigator: Attila  
Observer: Julian

- ✅ UAT1.1 - Odd Seconds - light is unlit

```
Examples:
  | time     |
  | 12:00:01 |
  | 13:00:03 |
```

- ✅ UAT1.2 - Even Seconds - light is lit

```
Examples:
  | time     |
  | 12:00:02 |
  | 13:00:04 |
```

- 🚧 UAT2.1 - 5 Hours

```
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

## Pomodoro 2

- ✅ UAT2.1 - 5 Hours

```
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

- ✅ refactor toBerlinTime function

- 🚧 UAT 3.1 - 1 Hour

```
Examples:
  | time     | pattern |
  | 00:21:40 |    OOOO | ✅
  | 01:55:43 |    ROOO |
  | 02:35:41 |    RROO |
  | 04:29:21 |    RRRR |
  | 05:32:52 |    OOOO |
  | 06:33:51 |    ROOO |
```

## Pomodoro 3

Driver: Julian
Navigator: Gearóid

- ✅ UAT 3.1 - 1 Hour

```
Examples:
  | time     | pattern |
  | 00:21:40 |    OOOO |
  | 01:55:43 |    ROOO |
  | 02:35:41 |    RROO |
  | 04:29:21 |    RRRR |
  | 05:32:52 |    OOOO |
  | 06:33:51 |    ROOO |
```

- ✅ Refactor the code for the one hour pattern

- 🚧 UAT 4.1 - 5 Minutes

```
Given <time>
When taking a look at the Berlin Clock
Then the fourth row of lights shows <pattern>

Examples:
  | time     | pattern     |
  | 00:00:00 | OOOOOOOOOOO | 🚧
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

## Pomodoro 4

Driver: Gearóid
Navigator: Attila

- ✅ UAT 4.1 - 5 Minutes

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

- ✅ Refactor the code for the five minutes pattern
- ✅ Refactor the code for pattern generations

# Pomodoro 5

- ✅ UAT 5.1 - 1 Minute

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

- ✅ Refactor: extract logic to separate function
- ✅ make variable naming consistent in `toXxxPattern` functions

# Next steps
1. Creating API stories with OpenAPI defs
1. Make something work locally (for example, healthcheck endpoint)
1. Make CD pipeline work with contract testing (maybe smoke test, too?)
1. Complete API
1. Include Swagger UI deployment in CD
1. Creating CLI stories
1. Implementing CLI

## Pomdoro 6

- ✅ Creating API stories with OpenAPI defs

## Pomodoro 7

Driver: Julian  
Navigator: Gearóid  

- ✅ UAT6.1 - Health route
- ✅ UAT7.1 - Successful return of Berlin clock time
