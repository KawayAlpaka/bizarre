import removeAttrs from '../src/web/remove-attrs';

describe('web:removeAttrs', () => {
  test('removeAttrs()', () => {
    document.body.innerHTML = '<div id="hehe"><div class="haha"></div></div>';
    removeAttrs(document.querySelector("#hehe"));
    // console.log(document.body.innerHTML);
    expect(document.body.innerHTML).toEqual('<div><div></div></div>');
  });
});
