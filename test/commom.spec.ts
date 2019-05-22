import bizarre from '../src';

describe('common:helloWorld', () => {
  test('helloWorld()', () => {
    expect(bizarre.Common.helloWorld()).toBe("hello world")
  })
});
