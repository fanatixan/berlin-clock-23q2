const toBerlinTime = (input) => {
  const time = input.split(':');
  const hours = parseInt(time[0], 10);
  const seconds = parseInt(time[2], 10);

  const fiveHourCount = Math.floor(hours / 5);
  const fiveHours = 'R'.repeat(fiveHourCount) + 'O'.repeat(4 - fiveHourCount);

  return {
    seconds: seconds % 2 === 0 ? 'Y' : 'O',
    fiveHours,
  };
};
module.exports = toBerlinTime;
