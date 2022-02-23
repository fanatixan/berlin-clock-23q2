module.exports = async () => {
  const time = global.getTime();
  const response = await global.fetch(`/to-berlin-time/${time}`);
  const berlinTime = await response.json();

  global.showSeconds(berlinTime.seconds);
};
