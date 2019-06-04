import React, { useState } from "react";

import { Task } from "../Task";

export const App = ({ methods }) => {
  return (
    <div className="App">
      <Task methods={methods} />
    </div>
  );
};
