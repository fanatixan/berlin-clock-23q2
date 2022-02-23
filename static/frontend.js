module.exports = async () => {
  const time = global.getTime();
  const { body: berlinTime } = await global.fetch(`/to-berlin-time/${time}`);

  global.showSeconds(berlinTime.seconds);
};
