/* (*)
* Write a program that uses a single synchronous filesystem operation to read
* a file and print the number of newlines (\n) it contains to the console (stdout),
* similar to running cat file | wc -l.
*/

const fs = require('fs');

module.exports = file => fs.readFileSync(file, 'utf-8').split('\n').length - 1;
