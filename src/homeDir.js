/* (*)
* Print your home dir
*/
const fs = require('fs');

function getHomeDir() {
  const homeDir = process.env['HOME'];  // eslint-disable-line
  fs.readdir(homeDir, (err, items) => { // eslint-disable-line
    // console.log(items);
  });
}
getHomeDir();
module.exports = getHomeDir;
