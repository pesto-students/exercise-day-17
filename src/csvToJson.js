/* (*)
  Read a csv file and return a promise. The promise should resolve with
  formatted JSON object.
*/

const fs = require('fs');

module.exports = fileName => new Promise((resolve) => {
  const fileData = fs.readFileSync(fileName);
  const [csvHeader, ...csvData] = fileData.toString().split('\n');

  const keys = csvHeader.split(',');

  const obj = csvData.map((csv) => {
    const record = {};
    const values = csv.split(',');

    keys.forEach((key, index) => {
      record[key] = values[index];
    });

    return record;
  });

  resolve(obj);
});
