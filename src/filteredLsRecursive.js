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

module.exports = (dir, ext) => {
  let dirsToProcess = [dir];
  let selectedFiles = [];

  while (dirsToProcess.length !== 0) {
    const curDir = dirsToProcess.shift();
    const fileOrDirNames = fs.readdirSync(curDir);

    selectedFiles = selectedFiles.concat(fileOrDirNames
      .filter(name => path.extname(name).substr(1) === ext));

    dirsToProcess = dirsToProcess.concat(fileOrDirNames
      .map(name => path.join(curDir, name))
      .filter(fileOrDirpath => fs.statSync(fileOrDirpath).isDirectory()));
  }

  return selectedFiles;
};
