class Hash {
  static getHash():any{
    var params = {};
    var _temp = window.location.hash.replace("#", "");
    var _paramsStr = _temp.split("&");
    _paramsStr.forEach(function (paramStr) {
      var paramArr = paramStr.split("=");
      params[paramArr[0]] = decodeURIComponent(paramArr[1]);
    });
    return params;
  }

  static setHash(obj:any,except?:RegExp):any{
    var _obj = Object.assign(Hash.getHash(),obj);
    var _arr = [];
    for (let key in _obj) {
      if (except && key.match(except)) {
        continue;
      }
      _arr.push(key + "=" + encodeURIComponent(_obj[key]));
    }
    location.hash = _arr.join("&");
    // if(location.hash.replace("#","").length > 0){
    //   location.hash = location.hash + "&" + _arr.join("&");
    // }else{
    //   location.hash = _arr.join("&");
    // }
    
  }
};

export {
  Hash
};