Feature: CLI

Scenario Outline: CLI
  Given timestamp <time>
  When I pass it to the CLI as argument
  Then <pattern> is printed

Examples:
  | time     | pattern                                                         |
  | 12:34:56 | 🟡\n🔴🔴⚪⚪\n🔴🔴⚪⚪\n🟡🟡🔴🟡🟡🔴⚪⚪⚪⚪⚪\n🟡🟡🟡🟡 |
