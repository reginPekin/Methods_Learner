import { createStore } from "redux";

const initialState = {
  methodId: 0,
  taskId: 0,
  displayWinner: "none",
  displayLoser: "none"
};

export const changePage = (state = initialState, action) => {
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
  changePage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
