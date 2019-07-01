import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./MethodsList.module.css";

import FingerUp from "../../images/fingerUp.png";
import FingerDown from "../../images/fingerDown.png";

import { changeWinnerDisplay } from "../../Utils/changeWinnerDidplay";
import { changeLoserDisplay } from "../../Utils/changeLoserDisplay";
import { changeMethod } from "../../Utils/changeMethod";
import { changeTask } from "../../Utils/changeTask";

export const MethodsListContainer = ({
  methods,
  dispatch,
  methodId,
  taskId
}) => {
  const [openedId, setIsOpened] = useState(0);
  const [text, setText] = useState("");

  return (
    <section className={styles.methodsList}>
      {/* <div className={styles.title}>Methods List</div> */}
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Find method"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <div className={styles.scroll}>
        {methods.map(
          (method, key) =>
            (text === "" ||
              text.toLowerCase() === method.name.slice(0, text.length)) && (
              <div className={styles.flexForTasks} key={key}>
                <button
                  style={
                    method.id === methodId
                      ? { backgroundColor: "white" }
                      : { backgroundColor: "var(--red)", color: "white" }
                  }
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
                    <section className={styles.buttonAndFinger}>
                      <button
                        style={
                          task.id === taskId
                            ? { backgroundColor: "white" }
                            : { backgroundColor: "var(--red)", color: "white" }
                        }
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
                      {task.finger && (
                        <img
                          src={FingerUp}
                          key={task.id + taskKey + 10}
                          width="30px"
                          alt="FingerUp"
                        />
                      )}
                      {task.finger === false && (
                        <img
                          src={FingerDown}
                          key={task.id + taskKey + 10}
                          width="30px"
                          alt="FingerDown"
                        />
                      )}
                    </section>
                  ))}
              </div>
            )
        )}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  methodId: state.methodId,
  taskId: state.taskId
});
export const MethodsList = connect(mapStateToProps)(MethodsListContainer);
