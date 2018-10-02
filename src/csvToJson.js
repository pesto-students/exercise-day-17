/* (*)
  Read a csv file and return a promise. The promise should resolve with
  formatted JSON object.
*/
// [{}, {}, {}]
// const path = require('path');
const fs = require('fs');

function test() {
  const results = [];
  fs.createReadStream('../avengers.csv')
    .on('data', results.push)
    .on('end', () => {
      // console.log(data);
      // [
      //   { NAME: 'Daffy Duck', AGE: 24 },
      //   { NAME: 'Bugs Bunny', AGE: 22 }
      // ]
    });
}
test();
