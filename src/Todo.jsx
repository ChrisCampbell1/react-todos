import TodoDetail from "./TodoDetail";

const User = (props) => {
  return (  
    <>
    <h3>Todo Owner: {props.todo.userId}</h3>
    <TodoDetail todo={props.todo}/>
    </>
  )
}

export default User;
