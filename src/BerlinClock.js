const RED = 'R';
const YELLOW = 'Y';
const OFF = 'O';

const fiveHourLightCount = 4;
const oneHourLightCount = 4;

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

const toOneHourPattern = (hours) => {
  const oneHourPattern = hours % 5;
  return (
    RED.repeat(oneHourPattern) + OFF.repeat(oneHourLightCount - oneHourPattern)
  );
};

const parseTime = (timeString) => timeString.split(':').map((segment) => parseInt(segment, 10));

const toBerlinTime = (input) => {
  const [hours, minutes, seconds] = parseTime(input);

  const secondsPattern = toSecondsPattern(seconds);
  const fiveHoursPattern = toFiveHoursPattern(hours);
  const oneHourPattern = toOneHourPattern(hours);

  let fiveMinutesPattern = 'OOOOOOOOOOO';
  const fiveMinutes = Math.floor(minutes / 5);
  if (minutes >= 5) {
    fiveMinutesPattern = YELLOW.repeat(fiveMinutes) + OFF.repeat(11 - fiveMinutes);
  }

  return {
    seconds: secondsPattern,
    fiveHours: fiveHoursPattern,
    oneHour: oneHourPattern,
    fiveMinutes: fiveMinutesPattern,
  };
};

module.exports = toBerlinTime;
