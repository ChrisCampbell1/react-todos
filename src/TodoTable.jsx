import TodoTableRow from "./TodoTableRow";

const TodoTable = (props) => {
  return (  
    <div>
      <table>
        <thead>
          <tr>
          <th>Owner</th>
          <th>Todo</th>
          <th>Complete?</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map(todo =>
            <TodoTableRow todo={todo} key={todo.id}/>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default TodoTable;
