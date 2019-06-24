import React from "react";
import { connect } from "react-redux";

import styles from "./Method.module.css";

export const MethodContainer = ({ method, dispatch, onClick = () => null }) => {
  return (
    <div>
      <button
        className={styles.method}
        onClick={() => {
          dispatch({ type: "CHANGE_METHOD", id: method.id });
          dispatch({ type: "CHANGE_TASK", id: 0 });
          console.log(method.id);
          onClick();
        }}
      >
        {method.name}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  methodId: state.methodId
});
export const Method = connect(mapStateToProps)(MethodContainer);
