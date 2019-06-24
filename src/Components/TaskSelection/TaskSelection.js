import React from "react";
import { connect } from "react-redux";

import styles from "./TaskSelection.module.css";

export const TaskSelectionContainer = ({ task, dispatch }) => {
  return (
    <div>
      <button
        className={styles.taskSelection}
        onClick={() => {
          dispatch({ type: "CHANGE_TASK", id: task.id });
        }}
      >
        {task.taskName}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  taskId: state.taskId
});
export const TaskSelection = connect(mapStateToProps)(TaskSelectionContainer);
