const Todo = ({ task }) => {
  let deadline = new Date(task.deadline);
  const daysLeft = Math.floor((deadline - new Date()) / 1000 / 3600 / 24);

  return (
    <div
      className={
        "w-full max-w-[27rem] bg-background border rounded px-4 py-2 hover:shadow-sm shadow-black"
      }
    >
      <h2 className="font-medium text-lg">{task.title}</h2>
      <p
        className={`w-fit rounded-full px-2 py-1 text-xs font-semibold float-right ${
          daysLeft < 0 ? "bg-red-600 text-white" : "bg-transparent"
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
    </div>
  );
};

export default Todo;
