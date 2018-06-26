/* (*)
* Convert a path to a file url: image.jpg → file:///Users/pesto/image.jpg
*/

const path = require('path');

function fileUrl(str) {
  if (typeof str !== 'string') {
    throw new Error('Expected a string');
  }
  let pathName = path.resolve(str).replace(/\\/g, '/');
  if (pathName[0] !== '/') {
    pathName = `/${pathName}`;
  }
  console.log(encodeURI(`file://${pathName}`));
}
fileUrl('pesto.jpg');
module.exports = () => {};
