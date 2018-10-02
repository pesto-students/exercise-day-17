/*
  Strip the End-Of-File (EOF) character from a string/buffer.

  const stripEof = require('strip-eof');

  stripEof('foo\nbar\n\n');
  //=> 'foo\nbar\n'

  stripEof(new Buffer('foo\nbar\n\n')).toString();
  //=> 'foo\nbar\n'
*/

module.exports = strOrBuf => strOrBuf.toString('utf-8').replace(/(\r|\n$)/g, '');
