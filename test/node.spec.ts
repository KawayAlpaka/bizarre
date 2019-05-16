import getBuffer from "../src/node/get-buffer";
var str = "hello world";
var bef = getBuffer(str);
console.log(bef);
console.log(bef.toString());
