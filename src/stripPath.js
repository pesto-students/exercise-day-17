/* (*)
  Strip a path from a path.

  Example:

  stripPath('path1/path2/path3/path4', 'path1/path2');
  //=> 'path3/path4'

  Helpful methods:
    - path.normalize();
*/
const path = require('path');

module.exports = (p1, p2) => {
  const str1 = path.normalize(p1);
  let str2 = '';
  try {
    str2 = path.normalize(p2);
  } catch (e) {
    str2 = '';
    return str1.substr(0, str1.length);
  }
  return str1.substr(str2.length + 1, str1.length - 1);
};
