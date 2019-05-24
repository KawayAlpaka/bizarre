
## 介绍    
bizarre 是一个奇怪的包，满足一些奇葩的需求，很少人会用到它。但说不定你会需要。具体可查看 [文档](https://kawayalpaka.github.io/bizarre/) 

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
[更多应用场景](https://kawayalpaka.github.io/bizarre/zh/start.html) 

## Api
Api简单划分为Common（通用）、Web（浏览器环境）、Node（nodejs环境）    
目前Api数量
Common:`0`个，Web:`2`个，Node: `0`个    
[API文档](https://kawayalpaka.github.io/bizarre/zh/api.html) 

