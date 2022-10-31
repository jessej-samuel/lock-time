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
    deadline: "2022-10-30T03:15:00.000Z",
    completed: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task);
    await TodoApi.put("/tasks/" + id, task);
    router.push("/app", "");
  };

  return (
    <>
      <div className="bg-primary p-4 rounded text-primaryText">
        <h1 className="font-semibold text-lg flex justify-between items-center">
          Task #{task.id}{" "}
          <span className="text-xs lowercase font-mono font-extralight flex items-center">
            [Created on {new Date(task.created).toUTCString()}]
          </span>
        </h1>

        <form
          className="my-4 h-48 flex justify-evenly flex-col"
          onSubmit={handleSubmit}
        >
          <p className="text-sm">
            <label
              htmlFor="title"
              className="grid grid-cols-3  h-10 items-center"
            >
              Title:{" "}
              <input
                type={"text"}
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                className="col-span-2  h-full rounded bg-white/50 focus-visible:text-black text-white focus-visible:bg-white focus-visible:border-2 focus-visible:border-primary outline-none p-1 caret-primary"
              />{" "}
            </label>
          </p>
          <p className="text-sm">
            <label
              htmlFor="deadline"
              className="grid grid-cols-3  h-10 items-center"
            >
              Deadline:{" "}
              <input
                type="datetime-local"
                value={task.deadline.slice(0, -1)}
                onChange={(e) =>
                  setTask({ ...task, deadline: e.target.value + "Z" })
                }
                className="col-span-2 bg-white/50 focus-visible:text-black text-white focus-visible:bg-white h-full rounded focus-visible:border-2 focus-visible:border-primary outline-none p-1 caret-primary"
              />
            </label>
          </p>
          <p className="text-sm">
            <label
              htmlFor="done"
              className="grid grid-cols-3  h-10 items-center justify-start"
            >
              Done:{" "}
              <input
                type="checkbox"
                value={task.completed}
                checked={task.completed}
                onChange={(e) => {
                  setTask({ ...task, completed: e.target.checked });
                  console.log(e.target.checked);
                }}
                className=" focus-visible:text-black text-white focus-visible:bg-white h-4 self-start rounded focus-visible:border-2 focus-visible:border-primary outline-none p-1 caret-primary"
              />
            </label>
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-primaryText rounded p-1"
          >
            ⬆️ Save
          </button>
        </form>
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
