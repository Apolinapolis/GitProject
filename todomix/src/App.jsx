import './App.css';
import { useEffect, useState } from 'react';
import { Todolist } from './components/TodoList';
import { InputField } from './components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, fetchTodos } from './store/todoSlice';

function App() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const { status, error } = useSelector( state => state.todos )

  useEffect(() => {
    dispatch(fetchTodos())
  },[dispatch])

  const addTask = () => {
    dispatch(addNewTask( text ));
    setText('');
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {error && <h2>Ошибка: {error}</h2>}
      {status === 'loading' && <h2>loading...</h2>}
      <Todolist />
    </div>
  );
}

export default App;