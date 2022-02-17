const COLORS = {
  R: '🔴',
  Y: '🟡',
  O: '⚪',
};

const cli = () => {};

const lightToEmoji = (color) => {
  return COLORS[color];
};

const rowToEmoji = (row) => {
  return row.split('').map(lightToEmoji).join('');
};

module.exports = { cli, rowToEmoji, lightToEmoji };
