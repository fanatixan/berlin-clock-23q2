const YELLOW = 'Y';
const OFF = 'O';

const FULL_FIVE_HOURS_PATTERN = 'RRRR';
const FULL_ONE_HOUR_PATTERN = 'RRRR';
const FULL_FIVE_MINUTES_PATTERN = 'YYRYYRYYRYY';

const toPattern = (fullPattern, length) => fullPattern.substring(0, length)
  + OFF.repeat(fullPattern.length - length);

const toSecondsPattern = (seconds) => {
  if (seconds % 2 === 0) {
    return YELLOW;
  }
  return OFF;
};

const toFiveHoursPattern = (hours) => {
  const fiveHourCount = Math.floor(hours / 5);
  return toPattern(FULL_FIVE_HOURS_PATTERN, fiveHourCount);
};

const toOneHourPattern = (hours) => {
  const oneHourCount = hours % 5;
  return toPattern(FULL_ONE_HOUR_PATTERN, oneHourCount);
};

const toFiveMinutesPattern = (minutes) => {
  const fiveMinutes = Math.floor(minutes / 5);
  return toPattern(FULL_FIVE_MINUTES_PATTERN, fiveMinutes);
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
