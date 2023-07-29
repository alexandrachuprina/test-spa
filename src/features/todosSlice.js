import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state) => {
      state.isLoading = true;
    },
    getTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getTodos, getTodosSuccess } = todosSlice.actions;

export const selectTodos = (state) => state.todos.todos;
export const selectTodosLoading = (state) => state.todos.isLoading;

export default todosSlice.reducer;
