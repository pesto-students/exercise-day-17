/* (*)
  Strip a path from a path.

  Example:

  stripPath('path1/path2/path3/path4', 'path1/path2');
  //=> 'path3/path4'

  Helpful methods:
    - path.normalize();
*/

const path = require('path');

module.exports = (origPath, toStrip) => {
  const pathOrig = path.normalize(origPath).split('/');
  if (toStrip === null) return pathOrig.join('/');

  const pathToStrip = path.normalize(toStrip).split('/');

  let idx = 0;
  for (let i = 0; i < pathToStrip.length; i += 1) {
    if (pathOrig[i] === pathToStrip[i]) idx += 1;
    else break;
  }

  return pathOrig.slice(idx).join('/');
};
