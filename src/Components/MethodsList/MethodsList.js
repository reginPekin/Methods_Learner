import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./MethodsList.module.css";

import { changeWinnerDisplay } from "../../Utils/changeWinnerDidplay";
import { changeLoserDisplay } from "../../Utils/changeLoserDisplay";
import { changeMethod } from "../../Utils/changeMethod";
import { changeTask } from "../../Utils/changeTask";

export const MethodsListContainer = ({ methods, dispatch }) => {
  const [openedId, setIsOpened] = useState(null);
  return (
    <section className={styles.methodsList}>
      <div className={styles.title}>Methods List</div>
      {methods.map((method, key) => (
        <div className={styles.flexForTasks} key={key}>
          <button
            className={styles.methodSelection}
            method={method}
            onClick={() => {
              setIsOpened(method.id);
              dispatch(changeWinnerDisplay("none"));
              dispatch(changeLoserDisplay("none"));
              dispatch(changeMethod(method.id));
              dispatch(changeTask(0));
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
                  dispatch(changeTask(task.id));
                  dispatch(changeWinnerDisplay("none"));
                  dispatch(changeLoserDisplay("none"));
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
