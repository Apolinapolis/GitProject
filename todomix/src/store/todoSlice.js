import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("server error");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteTodo = createAsyncThunk(
  "todos/fetchDeleteTodo",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("server delete error");
      }
      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchToogleStatus = createAsyncThunk(
  "todos/fetchToogleStatus",
  async (id, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: !getState().todos.todos.find((todo) => todo.id === id)
              .completed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("toogle error");
      }

      const data = await response.json();
      console.log(data);

      dispatch(toogleTodoComplete({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTask = createAsyncThunk(
  "todos/addNewTask",
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const todo = {
        title: text,
        userId: 1,
        completed: false,
      };

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) {
        throw new Error("add new task error");
      }

      const data = await response.json()
      dispatch(addTodo(data))
      
     } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "error";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((el) => el.id !== action.payload.id);
    },
    toogleTodoComplete(state, action) {
      const toggledItem = state.todos.find((el) => el.id === action.payload.id);
      toggledItem.completed = !toggledItem.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "success";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        setError(state, action);
      })
      .addCase(fetchDeleteTodo.rejected, (state, action) => {
        setError(state, action);
      })
      .addCase(fetchToogleStatus.rejected, (state, action) => {
        setError(state, action);
      });
  },
});


export const { addTodo, removeTodo, toogleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
