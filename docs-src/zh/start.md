---
sidebar: auto
---

# 安装使用     
```shell
npm install bizarre
```
## 浏览器
可以直接使用cdn
```html
<script src="https://cdn.jsdelivr.net/npm/bizarre@0.0.3/dist/bizarre-web.js"></script>
<script>
  console.log(bizarre.Common.helloWorld());
</script>
```

## nodejs
```javascript
// all
const Bizarre = require("bizarre");
console.log(Bizarre.Common.helloWorld());
// part
const helloWorld = require("bizarre/lib/common").helloWorld;
console.log(helloWorld());
```

## webpack
```javascript
// all
import bizarre from "bizarre";
console.log(bizarre.Common.helloWorld());
// part
import { helloWorld } from "bizarre/lib/common";
console.log(helloWorld());
```

## typescript
typescript 中的用法与 webpack 相同，都是ES6
```typescript
// all
import bizarre from "bizarre";
console.log(bizarre.Common.helloWorld());
// part
import { helloWorld } from "bizarre/lib/common";
console.log(helloWorld());
```
