const TodoTableRow = (props) => {
  return (  
    <tr>
    <td>{props.todo.userId}</td>
    <td>{props.todo.title}</td>
    <td>{props.completed ? "Yes" : "No"}</td>
  </tr>
  )
}

export default TodoTableRow;
