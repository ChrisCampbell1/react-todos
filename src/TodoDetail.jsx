const TodoDetail = (props) => {
  return (  
    <>
    <li>Todo title: {props.todo.title}</li>
    <li>Complete? {props.todo.completed ? "Yes" : "No"}</li>
    </>
  )
}

export default TodoDetail;
