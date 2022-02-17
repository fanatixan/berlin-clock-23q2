const COLORS = {
  R: '🔴',
  Y: '🟡',
  O: '⚪',
};

const cli = () => {};

const lightToEmoji = (color) => {
  return COLORS[color];
};

const rowToEmoji = (row) => lightToEmoji(row);

module.exports = { cli, rowToEmoji, lightToEmoji };
