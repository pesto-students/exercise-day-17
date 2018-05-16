const path = require('path');
const filteredLs = require('../src/filteredLs');

describe('filteredLs', () => {
  test('should return array of files in directory filtered by given extension', () => {
    const expected = [
      'a.json',
      'b.json',
    ];
    const actual = filteredLs(path.join(__dirname, '../src/Directory'), 'json');
    expect(actual.sort()).toEqual(expected);
  });
});
