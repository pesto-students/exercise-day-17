/* (*)
* Convert a path to a file url: image.jpg → file:///Users/pesto/image.jpg
*/

// const path = require('path');

function convertToFileUrl(imagePath) {
  // if (process.platform === 'win32')
  // }
  return `file://///${imagePath}`;
}

module.exports = convertToFileUrl;
