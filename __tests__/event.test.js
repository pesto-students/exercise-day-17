// const path = require('path');
const event = require('../src/event');

describe('event', () => {
  test('should return string with argument appended to hello', () => {
    // const actual = filteredLs(path.join(__dirname, '../src/Directory'), 'json');
    expect(event.greet('Pesto')).toEqual('Hello Pesto');
  });
});
