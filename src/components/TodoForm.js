import { useState } from "react";
import { Button } from "./Button";

export function TodoForm({ onAddTask }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim() === "") return;
    const id = crypto.randomUUID();
    const newTask = { description, id, done: false };
    console.log(newTask);
    // setIsAnimated(true);
    // setIsAnimated(true, () => onAddTask(newTask));
    onAddTask(newTask);
    setDescription("");
  }
  return (
    <form className="todo-input" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
      {/* <Button>Add</Button> */}
    </form>
  );
}
