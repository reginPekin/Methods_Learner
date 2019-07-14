import React, { useState } from "react";
import { connect } from "react-redux";

import { TaskBoard } from "../TaskBoard";
import { NextTask, PreviousTask } from "../Arrows";

import { changeWinnerDisplay } from "../../actions/changeWinnerDidplay";
import { changeLoserDisplay } from "../../actions/changeLoserDisplay";
import { changeMark } from "../../actions/changeMark";
import { changeTask } from "../../actions/changeTask";
import { changeAnswerDisplay } from "../../actions/changeAnswerDisplay";

import Information from "../../images/information.png";

import styles from "./TaskMain.module.css";

export const TaskMainContainer = ({
  methods,
  methodId,
  taskId,
  dispatch,
  displayWinner,
  displayLoser,
  displayAnswer
}) => {
  const [text, setText] = useState("");

  const method = methods[methodId];

  if (!method || !method.tasks) {
    return null;
  }

  const task = method.tasks[taskId];

  if (methodId === undefined || taskId === undefined) {
    return null;
  }
  return (
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
      <section className={styles.answerBox}>
        <div
          className={styles.answerText}
          style={
            displayAnswer ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          {task.answer}
        </div>
        <button
          onClick={() => dispatch(changeAnswerDisplay(!displayAnswer))}
          className={styles.buttonAnswer}
        >
          {!displayAnswer ? "Show" : "Hide"} answer
        </button>
      </section>
      <div className={styles.name}>
        {method.arrayMethodType}
        {method.name}: <span className={styles.taskName}>{task.taskName}</span>
      </div>
      <div className={styles.boardAndButtons}>
        <PreviousTask
          taskId={taskId}
          onClick={() => {
            dispatch(changeTask(taskId - 1));
          }}
        />

        <div className={styles.taskBoardComponent}>
          <TaskBoard
            task={task}
            winnerStyle={displayWinner}
            loserStyle={displayLoser}
            value={text}
            onChange={event => setText(event.target.value)}
            onSubmit={event => {
              if (
                text.replace(/\s+/g, "") === task.answer.replace(/\s+/g, "")
              ) {
                dispatch(changeWinnerDisplay("flex"));
                dispatch(changeLoserDisplay("none"));
                dispatch(changeMark(method.id, task.id, true));
                setText("");
              } else {
                dispatch(changeWinnerDisplay("none"));
                dispatch(changeLoserDisplay("flex"));
                dispatch(changeMark(method.id, task.id, false));
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
        <NextTask
          method={method}
          taskId={taskId}
          onClick={() => {
            dispatch(changeTask(taskId + 1));
          }}
        />
      </div>
    </main>
    // </div>
  );
};

const mapStateToProps = state => ({
  methods: state.methods.array,
  methodId: state.changePage.methodId,
  taskId: state.changePage.taskId,
  displayAnswer: state.changePage.displayAnswer,
  displayWinner: state.changePage.displayWinner,
  displayLoser: state.changePage.displayLoser
});

export const TaskMain = connect(mapStateToProps)(TaskMainContainer);
