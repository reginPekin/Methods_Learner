import React from "react";

import { TaskMain } from "../TaskMain";
import { MethodsList } from "../MethodsList/MethodsList";

import styles from "./App.module.css";

export const App = ({ methods }) => {
  return (
    <div className={styles.app}>
      <MethodsList className={styles.methodsList} methods={methods} />
      <TaskMain methods={methods} />
    </div>
  );
};
