import { useState } from "react";
import AddToDo from './AddToDo/AddToDo';
import './App.css';
import ShowToDo from './ShowToDo/ShowToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const done = r => {
    setTodos(todos.filter(t => t.task !== r))

  }

  return (
    <div className="App">
      <header className="App-header">Todo App</header>
      <AddToDo addTodo={todo => setTodos([...todos, todo])} />
      <ShowToDo todos={todos} done={done} />
    </div>
  );
}

export default App;
