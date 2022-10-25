const Todo = ({ task }) => {
  let deadline = new Date(task.deadline);
  return (
    <div
      className={
        "w-96 bg-background border rounded my-1 mx-1 px-4 py-2 hover:shadow-sm shadow-black"
      }
    >
      <h2 className="font-medium text-lg">{task.title}</h2>
      <p
        className={`w-fit rounded-full px-2 py-1 text-xs font-semibold float-right ${
          deadline.getDate() - new Date().getDate() < 0
            ? "bg-red-600 text-white"
            : "bg-transparent"
        }`}
      >
        {deadline.getDate() - new Date().getDate()} days left
      </p>
    </div>
  );
};

export default Todo;
