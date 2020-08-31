import React from "react";
import ReactDOM from "react-dom";
import { HelloworldComponent } from "./helloworldComponent/helloworldComponent";
import { setDefaultPage } from "./defaultPage";

setDefaultPage();

ReactDOM.render(
  <div>
    <HelloworldComponent />
  </div>,

  document.getElementById("root")
);
