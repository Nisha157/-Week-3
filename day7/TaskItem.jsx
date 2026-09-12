function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg mb-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5"
      />

      <span
        className={`flex-1 ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-3 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;