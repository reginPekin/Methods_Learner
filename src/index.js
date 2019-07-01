import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Components/Redux";

import "./style/index.css";

import { App } from "./Components/App";

const methods = [
  {
    name: "from()",
    id: 0,
    hint:
      "The method creates a new, shallow-copied **Array** instance from an array-like or iterable object",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: "nope",
        answer: "nope"
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "nope2",
        answer: "nope2"
      }
    ]
  },
  {
    name: "isArray()",
    id: 1,
    hint: "The method determines whether the passed value is an **Array**",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: "nope",
        answer: "nope"
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "nope",
        answer: "nope"
      }
    ]
  },
  {
    id: 2,
    name: "of()",
    hint:
      "The method creates a new **Array** instance from a variable number of arguments, regardless of number or type of the arguments. The difference between **Array.of()** and the **Array** constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: "Array.of(13);",
        answer: "[13]"
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "Array.of(1, 3, 5, 'milk');",
        answer: "[13,5]"
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: "Array.of(undefined);",
        answer: "[undefined]"
      }
    ]
  },
  {
    name: "concat()",
    id: 3,
    hint:
      "The method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample:
          "let array1 = ['a', 'b', 'c']" +
          "\n" +
          "let array2 = ['d', 'e', 'f'] console.log(array1.concat(array2));",
        answer: "nope"
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "nope",
        answer: "nope"
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
