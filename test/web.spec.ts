import Bizarre from '../src/index-web';
import * as path from 'path';
// const path = require("path");

describe('web:remove-Attrs', () => {
  test('removeAttrs()', () => {
    document.body.innerHTML = '<div id="hehe"><div class="haha"></div></div>';
    Bizarre.Web.removeAttrs(document.querySelector("#hehe"));
    expect(document.body.innerHTML).toEqual('<div><div></div></div>');
  });
});

describe('web:get-img', () => {
  let h = `
    <div>
      <img id="img-1" src="img/src.jpg"></img>
    </div>
    <style>
      .back{
        background:url("img/background.jpg");
      }
    </style>
    <div>
      <div class="back"></div>
    </div>
    <div>
      <svg id="svg1"><rect></rect></svg>
    </div>
  `;
  test('getImg(img)', () => {
    document.body.innerHTML = h;
    var img = Bizarre.Web.getImg(document.querySelector("#img-1"));
    var exp = "http://localhost/img/src.jpg";
    var res = img.url;
    expect(img.type).toEqual("url");
    expect(res).toEqual(exp);
  });
  // // 由于jsdom，不能模拟computedStyleMap，此测试用例不能通过
  // test('getImg(back)', () => {
  //   document.body.innerHTML = h;
  //   var img = Bizarre.Web.getImg(document.querySelector(".back"));
  //   var exp = "http://localhost/img/background.jpg";
  //   var res = img.url;
  //   expect(res).toEqual(exp);
  //   expect(img.type).toEqual("url");
  // });
  test('getImg(svg1)', () => {
    document.body.innerHTML = h;
    var img = Bizarre.Web.getImg(document.querySelector("#svg1"));
    var exp = `<svg id="svg1"><rect></rect></svg>`;
    var res = img.svg;
    expect(img.type).toEqual("svg");
    expect(res).toEqual(exp);
  });
  test('Hash(getHash)', () => {
    location.hash = "a=a1&b=b1";
    var hash = Bizarre.Web.Hash.getHash();
    expect(hash).toEqual({a:"a1",b:"b1"});
  });
  test('Hash(setHash1)', () => {
    Bizarre.Web.Hash.setHash({a:"a1",b:"b1"});
    expect(location.hash).toEqual("#a=a1&b=b1");
  });
  test('Hash(setHash2)', () => {
    location.hash = "o=o1";
    Bizarre.Web.Hash.setHash({a:"a1",b:"b1"});
    expect(location.hash).toEqual("#o=o1&a=a1&b=b1");
  });
});
