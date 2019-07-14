import React from "react";

import { TaskMain } from "../TaskMain";
import { MethodsList } from "../MethodsList/MethodsList";

import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <MethodsList />
      <TaskMain />
    </div>
  );
};
