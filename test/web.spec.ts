import Bizarre from '../src/index-web';

describe('web:removeAttrs', () => {
  test('removeAttrs()', () => {
    document.body.innerHTML = '<div id="hehe"><div class="haha"></div></div>';
    Bizarre.Web.removeAttrs(document.querySelector("#hehe"));
    expect(document.body.innerHTML).toEqual('<div><div></div></div>');
  });
});
