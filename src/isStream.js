const Stream = require('stream');
/*
* Check if the given argument is a Node js stream
*/

// class isStream {
//   static constructor(streamObj) {
//     return streamObj instanceof Stream;
//   }
// }

module.exports = (streamObj) => {
  this.writable = () => {
    console.log('');
    return streamObj instanceof Stream;
  };
  return streamObj instanceof Stream;
};

// module.exports = isStream;
