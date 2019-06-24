import React, { useState } from "react";

import styles from "./MethodsList.module.css";

import { Method } from "../Method";
import { TaskSelection } from "../TaskSelection";

export const MethodsList = ({ methods }) => {
  const [openedId, setIsOpened] = useState(null);
  return (
    <section className={styles.methodsList}>
      {methods.map((method, key) => (
        <div key={key}>
          <Method method={method} onClick={() => setIsOpened(method.id)} />
          {openedId === method.id &&
            method.tasks.map((task, taskKey) => (
              <TaskSelection key={key + "." + taskKey} task={task} />
            ))}
        </div>
      ))}
    </section>
  );
};
