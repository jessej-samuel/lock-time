import { useEffect, useState } from "react";
import TodoApi from "../../api/TodoApi";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoApi.get("/tasks/deadline/future").then((res) => setTodos(res.data));
  }, []);

  return (
    <div className="grid w-full grid-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center">
      {todos.map((task) => {
        return <Todo task={task} key={task.id} />;
      })}
    </div>
  );
};

export default TodoList;
