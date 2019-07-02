import React, { useRef } from "react";

import cx from "classnames";
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
        <div className={styles.relative}>
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
          <span className={cx(styles.bottom, styles.spanStyle)} />
          <span className={cx(styles.right, styles.spanStyle)} />
          <span className={cx(styles.top, styles.spanStyle)} />
          <span className={cx(styles.left, styles.spanStyle)} />
        </div>
      </form>
    </div>
  );
};
