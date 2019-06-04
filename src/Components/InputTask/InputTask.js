import React from "react";

import styles from "./InputTask.module.css";

export const InputTask = ({ answer, text }) => {
  return (
    <div className={styles.inputTask}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write your answer"
        value={text.value}
      />

      <button
        className={styles.inputButton}
        onClick={() =>
          text === answer ? alert("Correct!") : alert("Nope, sorry")
        }
        onChange={text.onChange}
      >
        Push
      </button>
    </div>
  );
};
