import React, { useState } from "react";
import { connect } from "react-redux";

import { TaskBoard } from "../TaskBoard";

// import Arrow from "../../images/arrow.png";
import Left from "../../images/left-arrow.png";
import Right from "../../images/right-arrow.png";

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
    // <div>
    <main className={styles.taskBoard}>
      <div className={styles.name}>{task.taskName}</div>
      <div className={styles.boardAndButtons}>
        <section className={styles.nextPrev}>
          {taskId !== 0 && (
            <button
              className={styles.bottonArrow}
              onClick={() => {
                dispatch({ type: "CHANGE_TASK", id: taskId - 1 });
              }}
            >
              <img
                src={Left}
                alt="arrow-left"
                onClick={() => console.log("CLICKED")}
                style={{ width: "55px" }}
              />
            </button>
          )}
        </section>
        <div className={styles.taskBoardComponent}>
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
        </div>
        <section className={styles.nextPrev}>
          {method.tasks[taskId + 1] !== undefined && (
            <button
              className={styles.bottonArrow}
              onClick={() => {
                dispatch({ type: "CHANGE_TASK", id: taskId + 1 });
              }}
            >
              <img
                src={Right}
                alt="arrow-right"
                onClick={() => console.log("CLICKED")}
                style={{ width: "55px" }}
              />
            </button>
          )}
        </section>
      </div>
    </main>
    // </div>
  );
};

const mapStateToProps = state => ({
  methodId: state.methodId,
  taskId: state.taskId
});

export const TaskMain = connect(mapStateToProps)(TaskMainContainer);
