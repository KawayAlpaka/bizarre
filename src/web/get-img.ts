var regUrl = /^url\(['"]([\S]+)['"]\)$/;

interface Img {
  type:string,
  url?:string,
  svg?:string
}

function getImg(ele: HTMLElement): Img {
  const node:any = ele as any;
  // img src
  if (node.src && node.tagName === "IMG") {
    return { type:"url",url:node.src };
  }
  // background-image
  if (node.computedStyleMap) {
    var backgroundImage = node.computedStyleMap().get("background-image").toString();
    if (regUrl.test(backgroundImage)) {
      return { type:"url",url:backgroundImage.replace(regUrl,"$1") };
    }
  }
  // svg
  if (node.tagName.toLowerCase() == "svg") {
    return { type:"svg", svg:node.outerHTML };
  }
  return {
    type:"none"
  };
}
export {
  getImg,
};
