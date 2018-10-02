/* (*)
  Parse JSON with more helpful errors.
  Refer to the test cases of parseJson for the particular errors.
*/

class ParseError extends Error {
  constructor(msg, file = '') {
    super(msg);
    this.msg = msg;

    this.message = `${this.msg} in ${file}`;
  }

  set fileName(file) {
    this.message = `${this.msg} in ${file}`;
  }
}

module.exports = (jsonStr, file) => {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    throw new ParseError(e.message, file);
  }
};
