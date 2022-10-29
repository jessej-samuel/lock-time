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
      <div className="bg-primary/50 p-4 rounded text-primaryText">
        <section className="my-2">
          <h1 className="font-semibold text-lg">Task #{task.id}</h1>
        </section>
        <Link href={"/app"}>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ⬅️ Go back to home
          </a>
        </Link>
      </div>
    </>
  );
};

export default TaskById;
