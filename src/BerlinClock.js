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

  let oneHour = 'OOOO';
  if (hours > 0 && hours < 5) {
    oneHour = RED.repeat(hours) + OFF.repeat(4 - hours);
  }

  return {
    seconds: secondsPattern,
    fiveHours: fiveHoursPattern,
    oneHour,
  };
};

module.exports = toBerlinTime;
