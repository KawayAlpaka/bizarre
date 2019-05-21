import Bizarre from '../src/index-node';
describe('common:getBuffer', () => {
  test('getBuffer(str).toString()', () => {
    let str = "hello world";
    let bef = Bizarre.Node.getBuffer(str);
    expect(bef.toString()).toBe(str)
  });
  test('getBuffer(str)', () => {
    let str = "hello world";
    let bef = Bizarre.Node.getBuffer(str);
    let bef2 = Buffer.from(str);
    expect(bef).toStrictEqual(bef2);
  });
});
