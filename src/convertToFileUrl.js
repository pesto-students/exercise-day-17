/* (*)
* Convert a path to a file url: image.jpg → file:///Users/pesto/image.jpg
*/

module.exports = (filepath) => {
  const isAbsPath = filepath[0] === '/';
  const absFilepath = isAbsPath ? filepath : `/Users/pesto/dev/${filepath}`;
  const encodedPath = encodeURIComponent(absFilepath);

  return `file://${encodedPath.replace(/%2F/g, '/')}`;
};
