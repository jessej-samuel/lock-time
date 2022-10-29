import { useRouter } from "next/router";
import TodoApi from "../../api/TodoApi";
import { useState, useEffect } from "react";
import Link from "next/link";

const TaskById = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState({
    id: 0,
    title: "",
    deadline: "",
    done: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await TodoApi.get("/tasks/" + id);
        setTask(data.data);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="bg-primary p-4 rounded text-primaryText">
        <h1 className="font-semibold text-lg flex justify-between items-center">
          Task #{task.id}{" "}
          <span className="text-xs lowercase font-mono font-extralight flex items-center">
            [Created on {new Date(task.created).toUTCString()}]
          </span>
        </h1>

        <section className="my-4">
          <p className="text-sm">Title: {task.title}</p>
          <p className="text-sm">
            Deadline: {new Date(task.deadline).toUTCString()}
          </p>
          <p className="text-sm">Done: {task.completed ? "Yes" : "No"}</p>
        </section>
        <Link href={"/app"}>
          <a className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
            ⬅️ Go back to home
          </a>
        </Link>
      </div>
    </>
  );
};

export default TaskById;
