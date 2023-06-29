import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState([]);
  const [val, setVal] = useState('');

  const handleClick = () => {
    if (val.trim() !== '') {
      setTodo([...todo, val]);
      setVal('');
    }
  }

  const markAsCompleted = (index) => {
    const updatedTodos = [...todo];
    updatedTodos[index] = <strike>{updatedTodos[index]}</strike>;
    setTodo(updatedTodos);
  }

  return (
    <>
      <input type="text" value={val} placeholder="Enter a task"onChange={e => setVal(e.target.value)}/>
      <button onClick={handleClick}> Add todo </button>
      <ul>
        {todo.map((task, index) => (
          <li key={index} onClick={() => markAsCompleted(index)}>
            {task}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
