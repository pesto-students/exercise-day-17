/* (*)
* Print your home dir
*/
const os = require('os');

function getHomeDir() {
  return os.homedir();
}
module.exports = getHomeDir;
