/* (*)
  Read a csv file and return a promise. The promise should resolve with
  formatted JSON object.
*/

const fs = require('fs');
// const path = require('path');

const csvToJson = (filepath) => {
  let fileData = fs.readFileSync(filepath);
  fileData = fileData.toString().split(/\r?\n/);
  // fileData.map(line => console.log(line));

  return fileData.reduce((acc, curr) => {
    const currArray = curr.split(',');
    if (currArray[0] === 'name') {
      return [];
    }
    return [...acc, {
      name: currArray[0],
      superheroname: currArray[1],
      power: currArray[2],
    }];
  }, []);
};


module.exports = csvToJson;
