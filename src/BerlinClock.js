const RED = 'R';
const YELLOW = 'Y';
const OFF = 'O';

const fiveHourLightCount = 4;

const toSecondsPattern = (seconds) => {
  if (seconds % 2 === 0) {
    return YELLOW;
  }
  return OFF;
};

const toFiveHoursPattern = (hours) => {
  const fiveHourCount = Math.floor(hours / 5);
  return (
    RED.repeat(fiveHourCount) + OFF.repeat(fiveHourLightCount - fiveHourCount)
  );
};

const parseTime = (timeString) => timeString.split(':').map((segment) => parseInt(segment, 10));

const toBerlinTime = (input) => {
  const [hours, , seconds] = parseTime(input);

  const secondsPattern = toSecondsPattern(seconds);
  const fiveHoursPattern = toFiveHoursPattern(hours);

  const oneHourPattern = hours % 5;
  const oneHour = RED.repeat(oneHourPattern) + OFF.repeat(4 - oneHourPattern);

  return {
    seconds: secondsPattern,
    fiveHours: fiveHoursPattern,
    oneHour,
  };
};

module.exports = toBerlinTime;
