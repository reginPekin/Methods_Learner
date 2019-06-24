import React, { useState } from "react";
import { connect } from "react-redux";

import { TaskBoard } from "../TaskBoard";

import styles from "./TaskMain.module.css";

export const TaskMainContainer = ({ methods, methodId, taskId, dispatch }) => {
  const [winnerStyle, setWinnerStyle] = useState({ display: "none" });
  const [loserStyle, setLoserStyle] = useState({ display: "none" });
  const [text, setText] = useState("");

  console.log("Methods:", methods);
  const method = methods[methodId];

  console.log("Method:", method, methodId);
  console.log("taskId:", taskId);

  const task = method.tasks[taskId];

  if (methodId === undefined || taskId === undefined) {
    return null;
  }
  return (
    <div className={styles.mainTaskBoard}>
      <div className={styles.taskBoard}>
        <div className={styles.name}>{task.taskName}</div>
        <div className={styles.boardAndButtons}>
          {method.tasks[taskId - 1] !== undefined && (
            <button
              onClick={() => {
                dispatch({ type: "CHANGE_TASK", id: taskId - 1 });
              }}
            >
              Previous
            </button>
          )}
          <TaskBoard
            task={task}
            winnerStyle={winnerStyle}
            loserStyle={loserStyle}
            value={text}
            onChange={event => setText(event.target.value)}
            onSubmit={event => {
              if (text.replace(/\s+/g, "") === task.answer) {
                setWinnerStyle({ display: "flex" });
                setLoserStyle({ display: "none" });
              } else {
                setWinnerStyle({ display: "none" });
                setLoserStyle({ display: "flex" });
                setText("");
              }
              event.preventDefault();
            }}
            onFocus={() => {
              if (text === "") {
                setWinnerStyle({ display: "none" });
                setLoserStyle({ display: "none" });
              }
            }}
          />
          {method.tasks[taskId + 1] !== undefined && (
            <button
              onClick={() => {
                dispatch({ type: "CHANGE_TASK", id: taskId + 1 });
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  methodId: state.methodId,
  taskId: state.taskId
});

export const TaskMain = connect(mapStateToProps)(TaskMainContainer);
