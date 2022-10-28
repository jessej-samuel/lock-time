const Todo = ({ task }) => {
  let deadline = new Date(task.deadline);
  const daysLeft = Math.floor((deadline - new Date()) / 1000 / 3600 / 24);

  return (
    <div
      className={
        "w-full max-w-[27rem] bg-background border rounded px-4 py-2 hover:shadow-md shadow-black group h-20 transition-all duration-300 ease-in-out hover:scale-y-105"
      }
    >
      <h2 className="font-medium text-lg" title={task.title}>{task.title.length > 20 ? `${task.title.slice(0,20)}...` : task.title}</h2>
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
        <div className="px-2 py-1 hover:bg-primary/10 rounded-full hover:bg-red-600 hover:text-white/75">🗑️ Delete</div>
        <div className="px-2 py-1 border-x  hover:bg-primary/10 rounded-full hover:bg-blue-600 hover:text-white/75">✏️ Edit</div>
        <div className="px-2 py-1  hover:bg-primary/10 rounded-full hover:bg-green-600 hover:text-white/75">✅ Done</div>
      </div>
    </div>
  );
};

export default Todo;
