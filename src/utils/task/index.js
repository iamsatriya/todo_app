const ACTIVE_TASK_KEY = 'ACTIVE_TASK_KEY';
const ACTIVE_TASK_START_KEY = 'ACTIVE_TASK_START_KEY';

const setStorageActiveTask = (id) => {
  localStorage.setItem(ACTIVE_TASK_KEY, id);
  const date = new Date();
  localStorage.setItem(ACTIVE_TASK_START_KEY, date.toISOString());
};

const getStorageActiveTaskId = () => {
  const id = localStorage.getItem(ACTIVE_TASK_KEY);
  return id;
};

const getStorageActiveTaskStartDate = () => {
  const startDate = localStorage.getItem(ACTIVE_TASK_START_KEY);
  return startDate;
};

const removeStorageActiveTask = () => {
  localStorage.removeItem(ACTIVE_TASK_KEY);
  localStorage.removeItem(ACTIVE_TASK_START_KEY);
};

export {
  setStorageActiveTask,
  getStorageActiveTaskId,
  getStorageActiveTaskStartDate,
  removeStorageActiveTask,
};
