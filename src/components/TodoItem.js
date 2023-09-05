import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { EditItem } from "./EditItem";
import { useState } from "react";

export function TodoItem({ task, onToggleTask, onDeleteTask, onSaveEdit }) {
  const [edit, setEdit] = useState(false);
  function handleEdit() {
    setEdit((edit) => !edit);
  }

  return (
    <li className={`todo-item`}>
      {edit ? (
        <EditItem task={task} onSaveEdit={onSaveEdit} setEdit={setEdit} />
      ) : (
        <label className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            value={task.done}
            onChange={() => onToggleTask(task.id)}
            checked={task.done}
          />
          <span className={task.done ? "done-task" : ""}>
            {task.description}
          </span>

          <span className="checkmark"></span>
        </label>
      )}
      {!edit && (
        <>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="icon"
            style={{ margin: "0 10px" }}
            onClick={handleEdit}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faDeleteLeft}
            rotation={180}
            onClick={() => onDeleteTask(task.id)}
          />
        </>
      )}
    </li>
  );
}
