import React from "react";

import styles from "./TaskCondition.module.css";

export const TaskCondition = ({ taskCode }) => {
  return (
    <div className={styles.task}>
      <span>Write result of the: </span>
      <div className={styles.taskCode}>"{taskCode}"</div>
    </div>
  );
};
