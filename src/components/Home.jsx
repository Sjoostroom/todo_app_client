import { useState, useContext } from "react";
import { todoItems } from "../data/todoItems";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Header from "./Header";

const Home = () => {
  const { todo } = useContext(TodoContext);
  /*  const [todos, setTodos] = useState(todoItems);

  const handleAddTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
 */
  const completedCount = todo.filter((todo) => todo.done).length;

  return (
    <div className="container">
      <div className="todo-box">
        <div className="todo-header">
          <h1>Todo Done</h1>
          <p>Keep it up</p>
        </div>
        <div className="circle">
          <p className="circle-text">
            {completedCount}/{todo.length}
          </p>
        </div>
      </div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
