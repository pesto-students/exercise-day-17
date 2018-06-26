/* (*)
 * Create a program that prints a list of files in a given directory,
 * filtered by the extension of the files. You will be provided a directory name
 * as the first argument to your program (e.g. '/path/to/dir/') and a file
 * extension to filter by as the second argument.
 *
 * Example, if you get 'txt' as the second argument then you will
 * need to filter the list to only files that end with .txt.
 * Note that the second argument will not come prefixed with a '.'
 *
 * filteredLs('/src', 'txt');
*/

const fs = require('fs');
const path = require('path');

// const pathToDirnow = '/home/aditya/Downloads';
// const filterbyThisnow = '.js';
const filtered = extension => (file) => {
  const ext = path.extname(file);
  //   console.log(ext);
  return ext === `.${extension}`;
};

const filteredLs = (pathToDir, filterbyThis) => {
  const files = fs.readdirSync(path.resolve(pathToDir));
  const items = files.filter(filtered(filterbyThis));
  return items;
};

// filteredLs(pathToDirnow, filterbyThisnow);
module.exports = filteredLs();
