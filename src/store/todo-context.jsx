import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext({
  todos: [],
  addToDo: (task) => {},
  deleteToDo: (id) => {},
  changeStatus: (id, status) => {},
  clearCompleted: () => {},
});

export default (props) => {
  const initialToDos = [
    { task: "Get a job brah", status: "pending", id: 1 },
    { task: "Be a person", status: "completed", id: 2 },
  ];

  const [todos, setTodos] = useState(initialToDos);

  const removeHandler = (id) => {
    setTodos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
  };

  const addHandler = (task) => {
    if (!task) {
      return;
    }

    const id = uuidv4();
    const newToDo = { task, status: "pending", id };
    setTodos([newToDo, ...todos]);
  };

  const changeStatusHandler = (id, status) => {
    const todosCopy = [...todos];
    const toBeUpdatedToDo = todosCopy.find((todo) => todo.id === id);
    toBeUpdatedToDo.status = status;

    setTodos(todosCopy);
  };

  const clearCompletedHandler = () => {
    setTodos((prevToDos) =>
      prevToDos.filter((todo) => todo.status !== "completed")
    );
  };

  const contextValue = {
    todos,
    addToDo: addHandler,
    deleteToDo: removeHandler,
    changeStatus: changeStatusHandler,
    clearCompleted: clearCompletedHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
