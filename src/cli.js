const COLORS = {
  R: '🔴',
  Y: '🟡',
  O: '⚪',
};

const cli = () => {};

const lightToEmoji = (color) => {
  return COLORS[color];
};

module.exports = { cli, lightToEmoji };
