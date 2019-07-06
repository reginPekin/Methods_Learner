import React from "react";

import styles from "./TaskCondition.module.css";
// import { ResultImage } from "../ResultImage";

export const TaskCondition = ({ task, winnerStyle, loserStyle }) => {
  return (
    <div className={styles.task}>
      <span className={styles.span}>Write result of the: </span>
      <div className={styles.taskCode}>
        <p className={styles.textCode}>{task.codeExample}</p>
        {/* <div className={styles.imageResult} /> */}
      </div>
    </div>
  );
};
