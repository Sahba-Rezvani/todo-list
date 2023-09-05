import { useState } from "react";
import { TodoList } from "./TodoList";
import { Header } from "./Header";
import { TodoForm } from "./TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"; // import { Button } from "./Button";
// const todoItems = [
//   { description: "Task 1", id: 111, done: false, edit: false },
//   { description: "Task 2", id: 222, done: false, edit: false },
//   { description: "Task 3", id: 333, done: false, edit: false },
// ];
export function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [sort, setSort] = useState("all");
  const [sortOptions, setSortOptions] = useState(false);
  let sortedTasks;

  if (sort === "all") sortedTasks = tasks;

  if (sort === "complete")
    sortedTasks = tasks.slice().filter((task) => task.done === true);

  if (sort === "active")
    sortedTasks = tasks.slice().filter((task) => task.done === false);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  const handleSaveEdit = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newText, edit: false } : task
      )
    );
  };

  function handleSortOptions() {
    setSortOptions(!sortOptions);
  }

  return (
    <div className="todo-container">
      <Header />

      <TodoForm onAddTask={handleAddTask} />
      <TodoList
        tasks={sortedTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onSaveEdit={handleSaveEdit}
      />
      {tasks.length !== 0 && (
        <div className="sort-box">
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="sort-bar"
            onClick={handleSortOptions}
          />
          {sortOptions && (
            <div className="sort-filters">
              <span onClick={() => setSort("complete")}>completed</span>
              <span onClick={() => setSort("active")}>active</span>
              <span onClick={() => setSort("all")}>all</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
