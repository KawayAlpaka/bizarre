---
sidebar: auto
displayAllHeaders: true
# sidebarDepth: 4
---

# API介绍
## common
common api（待补充）
## web  
web api
#### Web.removeAttrs(ele:Element)
* **功能**    
移除元素及子孙元素的全部属性 `attrs`
* **参数**    
  * ```{Element} ele```
* **用法**   
```javascript
Web.removeAttrs(document.querySelector("#id"))
```
#### Web.getImg(ele: HTMLElement): Img 
* **功能**    
找到dom元素上的图片资源：img.src、background-image、svg元素。
* **参数**    
  * ```{HTMLElement} ele```
* **返回**    
  ```typescript
    {
      type:string, // url | svg | none
      url?:string, // 图片url
      svg?:string  // svg字符串
    }
  ```
* **用法**    
```javascript
Web.getImg(document.querySelector("#img-1"))
```
## node   
node api（待补充）  
