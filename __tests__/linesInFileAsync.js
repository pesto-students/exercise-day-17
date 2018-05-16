const path = require('path');
const linesInFileAsync = require('../src/linesInFileAsync');

describe('linesInFileAsync', () => {
  test('should return number of lines in a file when path to it is given', async () => {
    const actual = await linesInFileAsync(path.join(__dirname, '../src/Directory/file.txt'));
    expect(actual).toBe(41);
  });
});
