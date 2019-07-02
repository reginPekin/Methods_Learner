import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Components/Redux";

import "./style/index.css";

import { App } from "./Components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<Redux />, document.getElementById("root"));
