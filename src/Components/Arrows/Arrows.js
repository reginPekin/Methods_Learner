import React from "react";
import Right from "../../images/right-arrow.png";
import Left from "../../images/left-arrow.png";

import styles from "./Arrows.module.css";
export const NextTask = ({ method, taskId, onClick }) => {
  return (
    <section className={styles.nextPrev}>
      {method.tasks[taskId + 1] !== undefined && (
        <button className={styles.buttonArrow} onClick={onClick}>
          <img src={Right} alt="arrow-right" style={{ width: "55px" }} />
        </button>
      )}
    </section>
  );
};

export const PreviousTask = ({ taskId, onClick }) => {
  return (
    <section className={styles.nextPrev}>
      {taskId !== 0 && (
        <button className={styles.buttonArrow} onClick={onClick}>
          <img src={Left} alt="arrow-left" style={{ width: "55px" }} />
        </button>
      )}
    </section>
  );
};
