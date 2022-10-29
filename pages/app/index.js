import TodoList from "../../components/app/TodoList";
import Link from "next/link";
import DueToday from "../../components/app/DueToday";
import Overdue from "../../components/app/Overdue";
export default function App() {
  return (
    <div className="">
      <DueToday />
      <Overdue />
      <TodoList />
      <Link href={"/app/new"}>
        <a className="text-xl rounded bg-blue-500 text-white px-4 py-2 mx-1 sticky bottom-4 float-right hover:shadow-xl flex items-center justify-center hover:-translate-y-1 transition-all">
          + Add new task
        </a>
      </Link>
    </div>
  );
}
