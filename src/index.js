import Devicon from "./Devicon/Devicon";
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <Devicon name="react" logoStyle="original" colored={true}/>,
  document.getElementById("root")
);
