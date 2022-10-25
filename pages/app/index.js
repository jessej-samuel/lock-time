import TodoList from "../../components/app/TodoList";
import Link from "next/link";
export default function App() {
  return (
    <div className="">
      <TodoList />
      <Link href={"/app/edit"}>
        <a className="text-xl rounded-full bg-secondary px-4 py-2 mx-1 sticky bottom-4 float-right hover:shadow-xl h-12 w-12 flex items-center justify-center">
          ➕
        </a>
      </Link>
    </div>
  );
}
