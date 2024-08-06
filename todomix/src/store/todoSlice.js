import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString,
        text: action.payload.text,
        complited: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter( el => el.id !== action.payload.id )
    },
    toogleTodoComplete(state, action) {},
  },
});

export const { addTodo, removeTodo, toogleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
