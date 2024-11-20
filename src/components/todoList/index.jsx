import React, { useState } from "react";
import "./main.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function inputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index); // _ to ignore
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="to_do_list">
      <h1>To-Do-List</h1>

      {/* Search Bar */}
      <div>
        <input
          className="search_el"
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <input
          onChange={inputChange}
          placeholder="Enter a task..."
          value={newTask}
          type="text"
        />
        <button className="add_btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete_btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            <button
              className="move_btn"
              onClick={() => moveTaskUp(index)}
            >
              <span>⬆️</span>
            </button>
            <button
              className="move_btn"
              onClick={() => moveTaskDown(index)}
            >
              <span>⬇️</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
