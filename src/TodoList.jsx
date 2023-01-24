import { todosList } from './todos-data';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {todosList.map(todo =>
      <Todo todo={todo} key={todo.id}/>
        )}
    </div>
  );
}

export default TodoList;
