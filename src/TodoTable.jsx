const TodoTable = (props) => {
  return (  
    <div>
      <table>
        <thead>
          <th>Owner</th>
          <th>Todo</th>
          <th>Complete?</th>
        </thead>
        <tbody>
          {props.todos.map(todo =>
            <tr>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default TodoTable;
