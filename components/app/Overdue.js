import { useState, useEffect } from "react";
import TodoApi from "../../api/TodoApi";
import Todo from "./Todo";

const Overdue = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const fetchTasks = () => {
    TodoApi.get("/tasks/deadline/overdue")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4 rounded bg-primary/50 mb-5">
      <h1 className="text-center font-semibold text-lg text-white mb-4">
        Overdue{" "}
        <button
          className=" bg-blue-500 
hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </h1>
      {show ? (
        <div className="grid w-full grid-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center">
          {tasks.map((task, oof) => (
            <Todo task={task} key={oof} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Overdue;
