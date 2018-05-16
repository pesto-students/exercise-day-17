const path = require('path');
const linesInFile = require('../src/linesInFile');

describe('linesInFile', () => {
  test('should return number of lines in a file when path to it is given', () => {
    expect(linesInFile(path.join(__dirname, '../src/Directory/file.txt'))).toBe(41);
  });
});
