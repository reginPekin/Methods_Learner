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
          <span
            style={{
              position: "absolute",
              backgroundColor: "var(--dark-blue)",
              transition: "transform 0.5s ease"
            }}
            className={styles.bottom}
          />
          <span
            style={{
              position: "absolute",
              backgroundColor: "var(--dark-blue)",
              transition: "transform 0.5s ease"
            }}
            className={styles.right}
          />
          <span
            style={{
              position: "absolute",
              backgroundColor: "var(--dark-blue)",
              transition: "transform 0.5s ease"
            }}
            className={styles.top}
          />
          <span
            style={{
              position: "absolute",
              backgroundColor: "var(--dark-blue)",
              transition: "transform 0.5s ease"
            }}
            className={styles.left}
          />
        </div>
      </form>
    </div>
  );
};
