import { useEffect, useState } from "react";
import TodoApi from "../../api/TodoApi";
import Todo from "./Todo";

const DueToday = () => {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = () => {
    TodoApi.get("/tasks/deadline/today")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTasks();
  });

  return (
    <div className="p-4 rounded bg-primary/50 mb-5">
      <h1 className="text-center font-semibold text-lg text-white mb-4">
        DueToday
      </h1>
      {tasks.map((task, oof) => (
        <Todo task={task} key={oof} />
      ))}
    </div>
  );
};

export default DueToday;
