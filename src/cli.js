const COLORS = {
  R: '🔴',
  Y: '🟡',
};

const cli = () => {};

const toEmoji = (color) => {
  return COLORS[color];
};

module.exports = { cli, toEmoji };
