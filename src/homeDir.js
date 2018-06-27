/* (*)
* Print your home dir
*/

const os = require('os');

function getHomeDir() {
  console.log(os.homedir());
  return os.homedir();
}

getHomeDir();

module.exports = getHomeDir;
