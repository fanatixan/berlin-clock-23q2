const COLORS = {
  R: '🔴',
  Y: '🟡',
  O: '⚪',
};

const cli = () => {};

const toEmoji = (color) => {
  return COLORS[color];
};

module.exports = { cli, toEmoji };
