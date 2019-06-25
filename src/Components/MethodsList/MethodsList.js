import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./MethodsList.module.css";

import { Method } from "../Method";

export const MethodsListContainer = ({ methods, dispatch }) => {
  const [openedId, setIsOpened] = useState(null);
  return (
    <section className={styles.methodsList}>
      {methods.map((method, key) => (
        <div className={styles.flexForTasks} key={key}>
          <Method method={method} onClick={() => setIsOpened(method.id)} />
          {openedId === method.id &&
            method.tasks.map((task, taskKey) => (
              <button
                className={styles.taskSelection}
                key={taskKey}
                onClick={() => {
                  dispatch({ type: "CHANGE_TASK", id: task.id });
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
