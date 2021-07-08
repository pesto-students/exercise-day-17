/*
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

const filteredLsRecursive = (loc, ext) => {
  if (!fs.statSync(loc).isDirectory()) return [];
  const files = fs.readdirSync(loc);
  const filterFiles = [];
  files.forEach((file) => {
    if (path.extname(file).endsWith(ext)) {
      filterFiles.push(file);
    } else if (path.extname(file) === '') {
      filterFiles.push(...filteredLsRecursive(path.join(loc, file), ext));
    }
  });
  return filterFiles;
};

module.exports = filteredLsRecursive;
