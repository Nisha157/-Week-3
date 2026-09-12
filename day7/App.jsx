import { useState } from "react";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = (event) => {
    event.preventDefault();

    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
          Task Tracker
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Organize your tasks and stay productive
        </p>

        <form onSubmit={addTask} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Add Task
          </button>
        </form>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        {tasks.length === 0 && (
          <p className="text-center text-gray-400">
            No tasks added yet.
          </p>
        )}

      </div>
    </div>
  );
}

export default App;