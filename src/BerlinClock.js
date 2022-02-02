const toBerlinTime = (input) => {
  const time = input.split(':');
  const hours = parseInt(time[0], 10);
  const seconds = parseInt(time[2], 10);

  let fiveHours;
  if (hours >= 5) {
    fiveHours = 'ROOO';
  } else {
    fiveHours = 'OOOO';
  }

  return {
    seconds: seconds % 2 === 0 ? 'Y' : 'O',
    fiveHours,
  };
};
module.exports = toBerlinTime;
