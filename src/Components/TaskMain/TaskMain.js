import React, { useState } from "react";
import { connect } from "react-redux";

import { TaskBoard } from "../TaskBoard";

import { changeWinnerDisplay } from "../../Utils/changeWinnerDidplay";
import { changeLoserDisplay } from "../../Utils/changeLoserDisplay";

import Information from "../../images/information.png";

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
  console.log(methodId);

  const task = method.tasks[taskId];

  if (methodId === undefined || taskId === undefined) {
    return null;
  }
  return (
    // <div>
    <main className={styles.taskBoard}>
      <section className={styles.hint}>
        <div className={styles.hintText}>{method.hint}</div>
        <img
          className={styles.hintImage}
          width="30px"
          height="30px"
          src={Information}
          alt="InformativeBlock"
        />
      </section>
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
              <img src={Left} alt="arrow-left" style={{ width: "55px" }} />
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
                dispatch({
                  type: "CHANGE_MARK"
                });
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
  methods: state.methods.array,
  methodId: state.changePage.methodId,
  taskId: state.changePage.taskId,
  displayWinner: state.changePage.displayWinner,
  displayLoser: state.changePage.displayLoser
});

export const TaskMain = connect(mapStateToProps)(TaskMainContainer);
