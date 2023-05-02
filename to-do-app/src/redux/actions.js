import { ADD_SUBTASK, ADD_TASK, TOGGLE_TASK, SET_SEARCH_QUERY, TOGGLE_SUB_TASK, DELETE_TASK} from "./actionType";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    title,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

export const addSubtask = (id, title) => ({
  type: ADD_SUBTASK,
  payload: {
    id,
    title,
  },
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: {
    query,
  },
});

export const toggleSubtask = (taskid, id)=> ({
  type: TOGGLE_SUB_TASK,
  payload: {
    taskid,
    id,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id
  }
})