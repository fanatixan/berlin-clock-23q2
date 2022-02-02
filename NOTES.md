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
