import styles from "./ToDoApp.module.scss";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../store/todo-context";
import ToDoAppItem from "./ToDoAppItem";

const toDoApp = () => {
  const { todos, addToDo, deleteToDo, clearCompleted, changeStatus } =
    useContext(TodoContext);

  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (filter === "All") return setFilteredTodos(todos);
    return setFilteredTodos(todos.filter((todo) => todo.status === filter));
  }, [filter, todos]);

  const pendingAmount = todos.filter(
    (todo) => todo.status === "pending"
  ).length;

  const createToDo = () => {
    addToDo(task);
    setTask("");
    console.log(todos);
  };

  return (
    <div className={styles.page}>
      <h1>To Do App</h1>
      <div className={styles.main}>
        <div className={styles["new-todo"]}>
          <input
            type="text"
            placeholder="Create a new to do"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button onClick={createToDo}>add to do</button>
        </div>
        {todos.length > 0 && (
          <ul className={styles.todos}>
            {filteredTodos.map((todo) => {
              return (
                <ToDoAppItem
                  todo={todo}
                  deleteToDo={deleteToDo}
                  changeStatus={changeStatus}
                  key={todo.id}
                />
              );
            })}
          </ul>
        )}
        {todos.length === 0 && (
          <p className={styles.notification}>No items matching the criteria!</p>
        )}
        <div className={styles.actions}>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("pending")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
        <p>Tasks to be completed: {pendingAmount}</p>
      </div>
    </div>
  );
};

export default toDoApp;
