const toBerlinTime = (input) => {
  const time = input.split(':');
  const seconds = parseInt(time[2], 10);
  return {
    seconds: seconds % 2 === 0 ? 'Y' : 'O',
    fiveHours: 'OOOO',
  };
};
module.exports = toBerlinTime;
