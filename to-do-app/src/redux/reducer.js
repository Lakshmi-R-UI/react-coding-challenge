import { ADD_SUBTASK, ADD_TASK, TOGGLE_TASK, SET_SEARCH_QUERY, TOGGLE_SUB_TASK } from "./actionType";

const initialState = {
    tasks: [],
    searchQuery: '',
  };

  const addTodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK: {
        const newTask = {
          id: Math.random(),
          title: action.payload.title,
          done: false,
          subtasks: [],
        };
        return {
          ...state,
          tasks: [...state.tasks, newTask],
        };
      }
      case TOGGLE_TASK: {
        const tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, done: !task.done } : task
        );
        return {
          ...state,
          tasks,
        };
      }
      case ADD_SUBTASK: {
        const tasks = state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                subtasks: [...task.subtasks, { title: action.payload.title, done: false , id: Math.random()}],
              }
            : task
        );
        return {
          ...state,
          tasks,
        };
      }
      case SET_SEARCH_QUERY: {
        return {
          ...state,
          searchQuery: action.payload.query,
        };
      }
      case TOGGLE_SUB_TASK : {
        const tasks = state.tasks.map((task) =>
          task.id === action.payload.taskid
            ? {
                ...task,
                subtasks: task.subtasks.map((subtask) => 
                  subtask.id === action.payload.id ? { ...subtask, done: !subtask.done } : subtask
                ),
              }
            : task
        );
        return {
          ...state,
          tasks,
        };
      }
      default:
        return state;
    }
  };
  

export default addTodoReducer;
