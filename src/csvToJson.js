/* (*)
  Read a csv file and return a promise. The promise should resolve with
  formatted JSON object.
*/

const fs = require('fs');

function objFromKeyValArrays(keyArr, valArr) {
  const ret = {};
  for (let i = 0; i < keyArr.length; i += 1) {
    ret[keyArr[i]] = valArr[i];
  }
  return ret;
}

module.exports = (file) => {
  const lines = fs.readFileSync(file, 'utf-8').split('\n');
  const headings = lines.shift().split(',');

  return lines.map(line => objFromKeyValArrays(headings, line.split(',')));
};
