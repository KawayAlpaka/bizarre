// npm install bizarre
// all
const Bizarre = require("bizarre");
console.log(Bizarre.Common.helloWorld());
// part
const helloWorld = require("bizarre/lib/common").helloWorld;
console.log(helloWorld());
