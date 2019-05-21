import * as Web from "./web";
import * as Common from "./common";

const bizarre = {
  Web,
  Common
}

if(!(typeof window == "undefined")){
  window["Bizarre"] = bizarre;
}

export default bizarre;