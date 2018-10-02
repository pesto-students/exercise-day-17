const path = require('path');
const filteredLsRecursive = require('../src/filteredLsRecursive');

describe('filteredLsRecursive', () => {
  test('should return array of files in directory filtered by given extension', () => {
    const expected = [
      'a.json',
      'b.json',
      'e.json',
      'f.json',
    ];
    const actual = filteredLsRecursive(path.join(__dirname, '../src/Directory/PuzzleStartsHere'), 'json');
    expect(actual.sort()).toEqual(expected);
  });
});
