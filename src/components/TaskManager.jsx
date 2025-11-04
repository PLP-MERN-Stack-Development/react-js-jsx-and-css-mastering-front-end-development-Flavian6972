import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

function TaskManager() {
  const { theme } = useTheme();
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  //sync tasks with localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  //Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div
      className="p-6 rounded-lg shadow-lg transition-colors bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Task Manager</h2>

    {/*Add new task*/}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task..."
          className="flex-grow p-2 border rounded bg-white border-gray-300 text-black dark:bg-gray-800 dark:border-gray-700 dark:text-gray-800"

        />
        <button
          onClick={addTask}
          className="bg-green-600 text-gray-800 px-4 py-2 rounded hover:bg-green-700"
        >
          Add
        </button>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4 justify-center">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded capitalize ${
  filter === type
    ? "bg-blue-600 text-gray-800 dark:text-gray-300"
    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
}`}

          >
            {type}
          </button>
        ))}
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 rounded bg-white dark:bg-gray-800"

            >
              <span
                onClick={() => toggleComplete(task.id)}
                className={`flex-grow cursor-pointer ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-900"
                }`}
              >
                {task.text}
              </span>

              <button
              onClick={() => toggleComplete(task.id)}
              className={`px-2 py-1 rounded ml-2 ${
                task.completed
                ? "bg-yellow-500 text-gray-800 hover:bg-yellow-600"
                : "bg-blue-500 text-gray-800 hover:bg-blue-600"
                }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                  </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-gray-800 px-2 py-1 rounded hover:bg-red-600 ml-2"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 italic text-center">No tasks yet...</p>
        )}
      </ul>
    </div>
  );
}

export default TaskManager;

