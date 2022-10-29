import { useRouter } from "next/router";
import TodoApi from "../../api/TodoApi";
import { useState, useEffect } from "react";
import Link from "next/link";

const TaskById = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState(null);

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
      <div>
        <h1>Task</h1>
        <p>{task?.toString()}</p>
        <p>{task?.description}</p>
      </div>
      <Link href={"/app"}>Go back to home</Link>
    </>
  );
};

export default TaskById;
