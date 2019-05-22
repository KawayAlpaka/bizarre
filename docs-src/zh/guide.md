---
sidebar: auto
---

## 介绍    
bizarre 是一个奇怪的包，满足一些奇葩的需求，很少人会用到它。但说不定你会需要。具体可查看 [api详细说明](api.html) 

## 快速使用   
1. 浏览器
```html
<script src="https://cdn.jsdelivr.net/npm/bizarre@0.0.3/dist/bizarre-web.js"></script>
<script>
  console.log(bizarre.Common.helloWorld());
</script>
```
2. nodejs
```shell
npm install bizarre
```
```javascript
// all
const Bizarre = require("bizarre");
console.log(Bizarre.Common.helloWorld());
// part
const helloWorld = require("bizarre/lib/common").helloWorld;
console.log(helloWorld());
```
[更多应用场景](start.html) 

## api
api 分为 web、node、common 部分。其中 web用于浏览器环境，node用于nodejs环境，common为通用。[api详细说明](api.html) 

