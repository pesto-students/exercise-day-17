/* (*)
  Check if filename is valid. Check out the test cases for `validFilename` for all cases.
*/

const validFilename = (fileName) => {
  if (fileName.includes('/')) {
    return false;
  }
  if (fileName.length === 0 || fileName.length > 255) {
    return false;
  }
  if (fileName.includes('<') || fileName.includes('>') || fileName.includes('|')) {
    return false;
  }
  if (fileName === 'con' || fileName === 'aux' || fileName === 'com1'
  || fileName === 'lpt1' || fileName === '.' || fileName === '..') {
    return false;
  }
  return true;
};

module.exports = validFilename;
