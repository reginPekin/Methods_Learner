export const changeMark = (methodIndex, taskIndex, mark) => {
  return {
    type: "CHANGE_MARK",
    methodIndex,
    taskIndex,
    mark
  };
};
