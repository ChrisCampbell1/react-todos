import './App.css';
import { todosList } from './todos-data';
import Todo from './Todo';

function App() {
  return (
    <div>
      {todosList.map(todo =>
      <Todo todo={todo}/>
        )}
    </div>
  );
}

export default App;
