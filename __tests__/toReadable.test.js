const { Readable } = require('stream');
const getStream = require('get-stream');

const toReadable = require('../src/toReadable');

const fixture = 'foo bar';

describe('toReadable', () => {
  test('string', async () => {
    const stream = toReadable(fixture);
    expect(stream instanceof Readable).toBe(true);
    expect(await getStream(stream)).toBe(fixture);
  });

  test('buffer', async () => {
    const stream = toReadable(Buffer.from(fixture));
    expect(await getStream(stream)).toBe(fixture);
  });
});
