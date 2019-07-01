import { createStore, combineReducers } from "redux";

import { methodsObject } from "./methods";

const initialState = {
  methodId: 0,
  taskId: 0,
  displayWinner: "none",
  displayLoser: "none",
  finger: null
};

const initialStateMethods = {
  array: methodsObject
};

const methods = (state = initialStateMethods, action) => {
  switch (action.type) {
    case "CHANGE_MARK":
      return {
        ...state,
        array: state.array.map(method =>
          method.map(task => {
            return { ...task, mark: true };
          })
        )
        // array: state.array.map(method =>
        //   method.map(task => {
        //     if (task.id === action.taskIndex) {
        //       return { ...task, mark: action.finger };
        //     } else return task;
        //   })
        // )
      };
    default:
      return state;
  }
};

const changePage = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_METHOD":
      return { ...state, methodId: action.id };
    case "CHANGE_TASK":
      return { ...state, taskId: action.id };
    case "CHANGE_DISPLAY_WINNER":
      return { ...state, displayWinner: action.display };
    case "CHANGE_DISPLAY_LOSER":
      return { ...state, displayLoser: action.display };

    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({ changePage, methods }),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
