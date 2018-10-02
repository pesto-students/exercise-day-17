/* (*)
  Check if filename is valid. Check out the test cases for `validFilename` for all cases.
*/

module.exports = (name) => {
  const reservedWords = ['con', 'aux', 'com1', 'lpt1'];

  if (reservedWords.indexOf(name) !== -1) return false;

  return /^([A-Za-z][A-Za-z0-9._-]{0,254}|\.{3,})$/.test(name);
};
