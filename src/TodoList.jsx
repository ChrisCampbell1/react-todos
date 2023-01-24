import { todosList } from './todos-data';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {todosList.map(todo =>
      <Todo todo={todo}/>
        )}
    </div>
  );
}

export default TodoList;
