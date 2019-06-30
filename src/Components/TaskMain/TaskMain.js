import React, { useState } from "react";
import { connect } from "react-redux";

import { TaskBoard } from "../TaskBoard";

import { changeWinnerDisplay } from "../../Utils/changeWinnerDidplay";
import { changeLoserDisplay } from "../../Utils/changeLoserDisplay";

// import Arrow from "../../images/arrow.png";
import Left from "../../images/left-arrow.png";
import Right from "../../images/right-arrow.png";

import styles from "./TaskMain.module.css";

export const TaskMainContainer = ({
  methods,
  methodId,
  taskId,
  dispatch,
  displayWinner,
  displayLoser
}) => {
  const [text, setText] = useState("");

  const method = methods[methodId];

  const task = method.tasks[taskId];

  if (methodId === undefined || taskId === undefined) {
    return null;
  }
  return (
    // <div>
    <main className={styles.taskBoard}>
      <div className={styles.name}>
        {method.name}: <span className={styles.taskName}>{task.taskName}</span>
      </div>
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
            winnerStyle={displayWinner}
            loserStyle={displayLoser}
            value={text}
            onChange={event => setText(event.target.value)}
            onSubmit={event => {
              if (text.replace(/\s+/g, "") === task.answer) {
                dispatch(changeWinnerDisplay("flex"));
                dispatch(changeLoserDisplay("none"));
                setText("");
              } else {
                dispatch(changeWinnerDisplay("none"));
                dispatch(changeLoserDisplay("flex"));
                setText("");
              }
              event.preventDefault();
            }}
            onFocus={() => {
              if (text === "") {
                dispatch(changeWinnerDisplay("none"));
                dispatch(changeLoserDisplay("none"));
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
  taskId: state.taskId,
  displayWinner: state.displayWinner,
  displayLoser: state.displayLoser
});

export const TaskMain = connect(mapStateToProps)(TaskMainContainer);
