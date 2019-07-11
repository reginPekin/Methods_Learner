import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./MethodsList.module.css";

import FingerUp from "../../images/fingerUp.png";
import FingerDown from "../../images/fingerDown.png";

import { changeWinnerDisplay } from "../../Utils/changeWinnerDidplay";
import { changeLoserDisplay } from "../../Utils/changeLoserDisplay";
import { changeMethod } from "../../Utils/changeMethod";
import { changeTask } from "../../Utils/changeTask";
import { changeAnswerDisplay } from "../../Utils/changeAnswerDisplay";

export const MethodsListContainer = ({
  methods,
  dispatch,
  methodId,
  taskId
}) => {
  const [openedId, setIsOpened] = useState(0);
  const [isClosed, setIsClosed] = useState(true);
  const [text, setText] = useState("");

  return (
    <section className={styles.methodsList}>
      <div className={styles.inputText}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Find method"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </div>
      <div className={styles.scroll}>
        {methods.map(
          (method, key) =>
            (text === "" ||
              method.name.toLowerCase().indexOf(text.toLowerCase()) !== -1) && (
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
                    method.id === openedId
                      ? setIsClosed(!isClosed)
                      : setIsClosed(true);
                    console.log(openedId);
                    dispatch(changeWinnerDisplay("none"));
                    dispatch(changeLoserDisplay("none"));
                    dispatch(changeMethod(method.id));
                    dispatch(changeAnswerDisplay(false));
                    dispatch(changeTask(0));
                  }}
                >
                  {method.name}
                </button>

                {openedId === method.id &&
                  isClosed &&
                  method.tasks.map((task, taskKey) => (
                    <section key={taskKey} className={styles.buttonAndFinger}>
                      <button
                        style={
                          task.id === taskId
                            ? { backgroundColor: "white" }
                            : { backgroundColor: "var(--red)", color: "white" }
                        }
                        className={styles.taskSelection}
                        onClick={() => {
                          dispatch(changeTask(task.id));
                          dispatch(changeWinnerDisplay("none"));
                          dispatch(changeLoserDisplay("none"));
                          dispatch(changeAnswerDisplay(false));
                        }}
                      >
                        {task.taskName}
                      </button>
                      {task.mark && (
                        <img src={FingerUp} width="30px" alt="FingerUp" />
                      )}
                      {task.mark === false && (
                        <img src={FingerDown} width="30px" alt="FingerDown" />
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
  methods: state.methods.array,
  methodId: state.changePage.methodId,
  taskId: state.changePage.taskId
});
export const MethodsList = connect(mapStateToProps)(MethodsListContainer);
