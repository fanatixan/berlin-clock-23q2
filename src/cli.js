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
  if (row.length > 1) {
    return '🔴🔴⚪⚪';
  }

  return lightToEmoji(row);
};

module.exports = { cli, rowToEmoji, lightToEmoji };
