import React from "react";
import ReactDOM from "react-dom";

import { App } from "./Components/App";

const methods = {
  id: 1,
  answer: "123",
  codeExample: "console.log(21)"
};
ReactDOM.render(<App methods={methods} />, document.getElementById("root"));
