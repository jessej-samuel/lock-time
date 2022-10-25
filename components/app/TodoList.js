import { useEffect, useState } from "react";
import TodoApi from "../../api/TodoApi";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoApi.get("/tasks").then((res) => setTodos(res.data));
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {todos.map((task) => {
        return <Todo task={task} key={task.id} />;
      })}
    </div>
  );
};

export default TodoList;
