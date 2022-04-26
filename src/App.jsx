import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ToDoApp from "./apps/ToDoApp/ToDoApp";
import HomePage from "./HomePage";
import TodoContextProvider from "./store/todo-context";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/accordion" element={<Accordion />} />

        <Route
          path="/to-do"
          element={
            <TodoContextProvider>
              <ToDoApp />
            </TodoContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
