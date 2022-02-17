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
    return `${lightToEmoji(row[0])}${lightToEmoji(row[1])}${lightToEmoji(
      row[2],
    )}${lightToEmoji(row[3])}`;
  }

  return lightToEmoji(row);
};

module.exports = { cli, rowToEmoji, lightToEmoji };
