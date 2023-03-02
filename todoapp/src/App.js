import { useState } from "react";
import AddToDo from './AddToDo/AddToDo';
import './App.css';
import ShowToDo from './ShowToDo/ShowToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const remove = r => {
    let removed = [...todos];
    removed.splice(todos[r], 1);
    setTodos(removed)
  }

  return (
    <div className="App">
      <header className="App-header">Todo App</header>
      <AddToDo addTodo={todo => setTodos([...todos, todo])} />
      <ShowToDo todos={todos} remove={remove} />
    </div>
  );
}

export default App;
