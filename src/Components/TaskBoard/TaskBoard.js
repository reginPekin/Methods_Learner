import React from "react";

import { TaskCondition } from "../TaskCondition";
import { InputTask } from "../InputTask";

import styles from "./TaskBoard.module.css";

export const TaskBoard = ({
  task,
  winnerStyle,
  loserStyle,
  value,
  onChange,
  onSubmit,
  onFocus
}) => {
  return (
    <div className={styles.task}>
      <TaskCondition
        task={task}
        winnerStyle={winnerStyle}
        loserStyle={loserStyle}
      />
      <InputTask
        onSubmit={onSubmit}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {winnerStyle === "flex" && (
        <div className={styles.wellDone}>Well done!</div>
      )}
      {loserStyle === "flex" && (
        <div className={styles.tryAgain}>Try again</div>
      )}
    </div>
  );
};
