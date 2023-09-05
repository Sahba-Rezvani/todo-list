import "../index.css";

export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} type="text">
      {children}
    </button>
  );
}
