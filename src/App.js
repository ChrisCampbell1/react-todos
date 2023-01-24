import './App.css';
import TodoList from './TodoList';
import TodoTable from './TodoTable';
import { todosList } from './todos-data';

function App() {
  return (
    <div>
      <h1>Todo Table:</h1>
      <TodoTable todos={todosList}/>
      <h1>Todo List:</h1>
      <TodoList todos={todosList}/>
    </div>
  );
}

export default App;
