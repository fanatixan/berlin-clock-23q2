const toBerlinTime = require('./BerlinClock');

const COLORS = {
  R: '🔴',
  Y: '🟡',
  O: '⚪',
};

const lightToEmoji = (color) => {
  return COLORS[color];
};

const rowToEmoji = (row) => {
  return row.split('').map(lightToEmoji).join('');
};

const cli = (time) => {
  const { seconds, fiveHours, oneHour, fiveMinutes, oneMinute } =
    toBerlinTime(time);

  return [
    rowToEmoji(seconds),
    rowToEmoji(fiveHours),
    rowToEmoji(oneHour),
    rowToEmoji(fiveMinutes),
    rowToEmoji(oneMinute),
  ].join('\n');
};

module.exports = { cli, rowToEmoji, lightToEmoji };
