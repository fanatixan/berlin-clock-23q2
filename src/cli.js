const COLORS = {
  R: '🔴',
  Y: '🟡',
  O: '⚪',
};

const cli = () => {};

const rowToEmoji = () => '🔴';

const lightToEmoji = (color) => {
  return COLORS[color];
};

module.exports = { cli, rowToEmoji, lightToEmoji };
