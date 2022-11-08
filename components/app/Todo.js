import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TodoApi from "../../api/TodoApi";

import styles from "../../styles/Todo.module.css";

const Todo = ({ task }) => {
  const todoRef = useRef(null);
  let deadline = new Date(task.deadline);
  const [actualTask, setActualTask] = useState(task);
  const [strikethorugh, setStrikethorugh] = useState("");
  const daysLeft = Math.floor((deadline - new Date()) / 1000 / 3600 / 24);

  const handleDoneClick = async (e) => {
    e.preventDefault();
    await TodoApi.post("/tasks/done", {
      id: actualTask.id,
    });
    setActualTask({ ...actualTask, done: true });
    setStrikethorugh("line-through");
    todoRef.current.classList.add(styles.fadeOut);
    setTimeout(() => {
      todoRef.current.remove();
    }, 1000);
    console.log(actualTask);
  };

  return (
    <Link href={"/app/" + task.id}>
      <div
        className={
          "w-full max-w-[27rem] bg-background border rounded px-4 py-2 hover:shadow-md shadow-black group h-20 transition-all duration-300 ease-in-out hover:scale-y-105"
        }
        ref={todoRef}
      >
        <h2
          className={`font-medium text-lg ${
            actualTask.completed ? "line-through" : ""
          } ${strikethorugh}`}
          title={task.title}
        >
          {task.title.length > 20
            ? `${task.title.slice(0, 20)}...`
            : task.title}
        </h2>
        <p
          className={`w-fit rounded-full px-2 py-1 text-xs font-semibold float-right ${
            daysLeft < 0 ? "bg-red-600 text-white/75" : "bg-transparent"
          }`}
        >
          {daysLeft < 0
            ? "Overdue by " + Math.abs(daysLeft) + " days"
            : daysLeft < 1
            ? "Due today"
            : daysLeft == 1
            ? "Due tomorrow"
            : daysLeft + " days left"}
        </p>
        <div className="group-hover:flex border rounded-full w-fit bg-primary/10 cursor-pointer hidden text-xs font-semibold text-black/70 transition-all duration-300 ease-in-out">
          <div
            className="px-2 py-1  hover:bg-primary/10 rounded-full hover:bg-green-600 hover:text-white/75"
            onClick={handleDoneClick}
          >
            ✅ Done
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Todo;
