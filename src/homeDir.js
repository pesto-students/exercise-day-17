/* (*)
* Print your home dir
*/

const os = require('os');

function getHomeDir() {
  console.log(os.homedir()); // eslint-disable no-console
}

module.exports = getHomeDir;
