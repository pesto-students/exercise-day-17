/*
  Strip the End-Of-File (EOF) character from a string/buffer.

  const stripEof = require('strip-eof');

  stripEof('foo\nbar\n\n');
  //=> 'foo\nbar\n'

  stripEof(new Buffer('foo\nbar\n\n')).toString();
  //=> 'foo\nbar\n'
*/

module.exports = () => {};
