import { TodoItem } from "./TodoItem";
export function TodoList({ tasks, onToggleTask, onDeleteTask, onSaveEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          task={task}
          key={task.id}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
}
