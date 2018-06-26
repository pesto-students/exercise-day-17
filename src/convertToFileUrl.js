/* (*)
* Convert a path to a file url: image.jpg → file:///Users/pesto/image.jpg
*/

const path = require('path');


const convertToFileUrl = (pathname) => {
  console.log(path.resolve(pathname));
};

convertToFileUrl('/Users/pesto/dev/te^st.jpg');

module.exports = convertToFileUrl;
