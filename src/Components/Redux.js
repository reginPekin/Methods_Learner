import { createStore } from "redux";

const initialState = { methodId: 0, taskId: 0 };

export const changePage = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_METHOD":
      return { ...state, methodId: action.id };
    case "CHANGE_TASK":
      return { ...state, taskId: action.id };
    default:
      return state;
  }
};

export const store = createStore(
  changePage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
