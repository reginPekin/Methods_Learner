import React, { useRef } from "react";
//import cx from "classnames";
// <div className={cx(style.div, style.div2, {[styles.div2]: isCorrect, [styles.div3]: isFalse })}>

import styles from "./InputTask.module.css";

export const InputTask = ({ onSubmit, value, onChange, onFocus }) => {
  const ref = useRef(null);

  return (
    <div className={styles.inputTask}>
      <form
        className={styles.form}
        onSubmit={event => {
          onSubmit(event);
          ref.current.blur();
        }}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="Write your answer"
          ref={ref}
          value={value}
          onChange={event => {
            onChange(event);
          }}
          onFocus={onFocus}
        />
      </form>
    </div>
  );
};
