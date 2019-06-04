import React, { useState } from "react";

import { TaskCondition } from "../TaskCondition";
import { InputTask } from "../InputTask";

export const Task = ({ methods }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <TaskCondition taskCode={methods.codeExample} />
      <InputTask
        answer={methods.answer}
        text={{ value: text, onChange: event => setText(event.target.value) }}
      />
    </div>
  );
};
