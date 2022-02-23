const berlinize = async () => {
  const time = global.getTime();
  const response = await global.fetch(`/to-berlin-time/${time}`);
  const berlinTime = await response.json();

  global.showSeconds(berlinTime.seconds);
  global.showFiveHours(berlinTime.fiveHours);
  global.showOneHour(berlinTime.oneHour);
  global.showFiveMinutes(berlinTime.fiveMinutes);
  global.showOneMinute(berlinTime.oneMinute);
};

module.exports = berlinize;
