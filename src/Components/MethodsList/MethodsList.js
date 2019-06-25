import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./MethodsList.module.css";

export const MethodsListContainer = ({ methods, dispatch }) => {
  const [openedId, setIsOpened] = useState(null);
  return (
    <section className={styles.methodsList}>
      <span className={styles.title}>Methods List</span>
      {methods.map((method, key) => (
        <div className={styles.flexForTasks} key={key}>
          <button
            className={styles.method}
            method={method}
            onClick={() => {
              setIsOpened(method.id);
              dispatch({ type: "CHANGE_DISPLAY_WINNER", display: "none" });
              dispatch({ type: "CHANGE_DISPLAY_LOSER", display: "none" });
              dispatch({ type: "CHANGE_METHOD", id: method.id });
              dispatch({ type: "CHANGE_TASK", id: 0 });
            }}
          >
            {method.name}
          </button>
          {openedId === method.id &&
            method.tasks.map((task, taskKey) => (
              <button
                className={styles.taskSelection}
                key={taskKey}
                onClick={() => {
                  dispatch({ type: "CHANGE_TASK", id: task.id });
                  dispatch({ type: "CHANGE_DISPLAY_WINNER", display: "none" });
                  dispatch({ type: "CHANGE_DISPLAY_LOSER", display: "none" });
                }}
              >
                {task.taskName}
              </button>
            ))}
        </div>
      ))}
    </section>
  );
};

const mapStateToProps = state => ({
  taskId: state.taskId
});
export const MethodsList = connect(mapStateToProps)(MethodsListContainer);
