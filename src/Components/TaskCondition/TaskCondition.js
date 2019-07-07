import React from "react";

import styles from "./TaskCondition.module.css";

export const TaskCondition = ({ task }) => {
  return (
    <div className={styles.task}>
      <span className={styles.span}>
        Write result of the task №{task.id + 1}:{" "}
      </span>
      <div className={styles.taskCode}>
        <p className={styles.textCode}>{task.codeExample}</p>
      </div>
    </div>
  );
};
