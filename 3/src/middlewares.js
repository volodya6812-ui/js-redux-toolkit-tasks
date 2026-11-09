const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  // BEGIN (write your solution here)
    if (action.type === "TASK_ADD") {
      const date = new Date().toLocaleDateString("ru-RU");

      const newAction = {
        ...action,
        payload: {
          ...action.payload,
          task: {
            ...action.payload.task,
            text: `Задача на ${date}: ${action.payload.task.text}`,
          },
        },
      };

      return next(newAction);
    }

    return next(action);
  // END
};

export default { logger, addDate };
