export function EditItem({ task, onSaveEdit, setEdit }) {
  return (
    <>
      <input
        type="text"
        className="edit-input"
        value={task.description}
        onChange={(e) => onSaveEdit(task.id, e.target.value)}
        onBlur={() => setEdit(false)}
        style={{ width: "100%", border: "none", outline: "none" }}
      />
    </>
  );
}
