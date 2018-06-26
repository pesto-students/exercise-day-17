/*
* Check if the given argument is a Node js stream
*/

const isStream = stream =>
  stream !== null &&
  typeof stream === 'object' &&
  typeof stream.pipe === 'function';


isStream.writable = stream =>
  isStream(stream) &&
  stream.writable !== false &&
	typeof stream._write === 'function' && // eslint-disable-line
	typeof stream._writableState === 'object'; // eslint-disable-line

isStream.readable = stream =>
  isStream(stream) &&
  stream.readable !== false &&
	typeof stream._read === 'function' && // eslint-disable-line
	typeof stream._readableState === 'object'; // eslint-disable-line

isStream.duplex = stream =>
  isStream.writable(stream) &&
  isStream.readable(stream);

isStream.transform = stream =>
  isStream.duplex(stream) &&
  typeof stream._transform === 'function' && // eslint-disable-line
  typeof stream._transformState === 'object'; // eslint-disable-line

module.exports = isStream;
