const RED = 'R';
const YELLOW = 'Y';
const OFF = 'O';

const fiveHourLightCount = 4;
const oneHourLightCount = 4;

const fullFiveMinutesPattern = 'YYRYYRYYRYY';

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

const toFiveMinutesPattern = (minutes) => {
  const fiveMinutes = Math.floor(minutes / 5);
  return (
    fullFiveMinutesPattern.substring(0, fiveMinutes)
    + OFF.repeat(fullFiveMinutesPattern.length - fiveMinutes)
  );
};

const parseTime = (timeString) => timeString.split(':').map((segment) => parseInt(segment, 10));

const toBerlinTime = (input) => {
  const [hours, minutes, seconds] = parseTime(input);

  const secondsPattern = toSecondsPattern(seconds);
  const fiveHoursPattern = toFiveHoursPattern(hours);
  const oneHourPattern = toOneHourPattern(hours);

  const fiveMinutesPattern = toFiveMinutesPattern(minutes);

  return {
    seconds: secondsPattern,
    fiveHours: fiveHoursPattern,
    oneHour: oneHourPattern,
    fiveMinutes: fiveMinutesPattern,
  };
};

module.exports = toBerlinTime;
