import getBuffer from '../src/node/get-buffer';

describe('common:getBuffer', () => {
  test('getBuffer(str).toString()', () => {
    let str = "hello world";
    let bef = getBuffer(str);
    expect(bef.toString()).toBe(str)
  });
  test('getBuffer(str)', () => {
    let str = "hello world";
    let bef = getBuffer(str);
    let bef2 = Buffer.from(str);
    expect(bef).toStrictEqual(bef2);
  });
});
