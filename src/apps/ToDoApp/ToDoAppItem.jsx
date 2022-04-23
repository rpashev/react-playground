import styles from "./ToDoAppItem.module.scss";

const toDoItem = (props) => {
  const changeStatus = (e) => {
    const status = e.target.checked ? "completed" : "pending";
    props.changeStatus(props.todo.id, status);
  };

  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={props.todo.id}
        onChange={changeStatus}
        checked={props.todo.status === "completed" ? true : false}
      ></input>
      <label htmlFor={props.todo.id}>{props.todo.task}</label>
      <button onClick={() => props.deleteToDo(props.todo.id)}>Delete</button>
    </li>
  );
};

export default toDoItem;
