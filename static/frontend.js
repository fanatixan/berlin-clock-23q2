module.exports = () => {
  const time = global.getTime();
  global.fetch(`/to-berlin-time/${time}`);
};
