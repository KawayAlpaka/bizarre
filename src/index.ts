import * as Web from "./web";
import * as Common from "./common";
import * as Node from "./node";

const bizarre = {
  Web,
  Common,
  Node
}

if(!(typeof window == "undefined")){
  window["Bizarre"] = bizarre;
}

export default bizarre;