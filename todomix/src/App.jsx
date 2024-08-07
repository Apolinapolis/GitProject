import './App.css';
import { useState } from 'react';
import { Todolist } from './components/TodoList';
import { InputField } from './components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';


function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <Todolist />
    </div>
  );
}

export default App;
