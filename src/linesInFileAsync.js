/* (*)
* Write a program that uses a single asynchronous filesystem operation to read
* a file and print the number of newlines (\n) it contains to the console (stdout),
* similar to running cat file | wc -l.
*
* Return a promise that is resolved with the number of lines
*/

const fs = require('fs');

module.exports = file => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) reject(err);
    else resolve(data.split('\n').length - 1);
  });
});
