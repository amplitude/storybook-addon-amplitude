function managerEntries(entry = [], options) {
  return [...entry, require.resolve("./dist/esm/manager")];
}

module.exports = {
  managerEntries,
};
