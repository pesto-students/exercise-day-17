/* (*)
* Convert a path to a file url: image.jpg → file:///Users/pesto/image.jpg
*/

// const path = require('path');
const { URL } = require('url');

const convertFileToUrl = (fileName) => {
  const fname = new URL(`file://${fileName}`);
  console.log(fname);
};

convertFileToUrl('C:\\Users\\pesto\\dev\\te^st.jpg');

module.exports = () => {};
