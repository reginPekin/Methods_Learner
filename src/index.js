import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Components/Redux";

import "./style/index.css";

import { App } from "./Components/App";

const methods = [
  {
    name: "sort",
    id: 0,
    tasks: [
      {
        taskName: "Task #1",
        id: 0,
        codeExample: "pad",
        answer: "pad"
      },
      {
        taskName: "Task #2",
        id: 1,
        codeExample: "ort",
        answer: "ort"
      }
    ]
  },
  {
    name: "method #2",
    id: 1,
    tasks: [
      {
        taskName: "Task #1",
        id: 0,
        codeExample: "123",
        answer: "123"
      },
      {
        taskName: "Task #2",
        id: 1,
        codeExample: "456",
        answer: "456"
      }
    ]
  },
  {
    id: 2,
    name: "method #3",
    tasks: [
      {
        taskName: "Task #1",
        id: 0,
        codeExample: "asd",
        answer: "asd"
      },
      {
        taskName: "Task #2",
        id: 1,
        codeExample: "dsa",
        answer: "dsa"
      }
    ]
  }
];

ReactDOM.render(
  <Provider store={store}>
    <App methods={methods} />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<Redux />, document.getElementById("root"));
