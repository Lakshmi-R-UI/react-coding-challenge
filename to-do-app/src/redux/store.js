import { configureStore } from "@reduxjs/toolkit";
import addTodoReducer  from "./reducer";

const store = configureStore({
  reducer: addTodoReducer,
});

export default store;