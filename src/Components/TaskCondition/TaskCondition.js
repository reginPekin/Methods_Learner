import React from "react";

import { ResultImage } from "../ResultImage";

import styles from "./TaskCondition.module.css";

export const TaskCondition = ({ task, winnerStyle, loserStyle }) => {
  return (
    <div className={styles.task}>
      <span className={styles.span}>Write result of the: </span>
      <div className={styles.taskCode}>
        <div className={styles.textCode}>{task.codeExample}</div>
        <ResultImage
          className={styles.codeResult}
          winnerStyle={winnerStyle}
          loserStyle={loserStyle}
        />
      </div>
    </div>
  );
};
