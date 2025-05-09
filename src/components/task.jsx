export const Task = ({ task, onDelete, onCheck }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F3F4F6",
        padding: "12px 16px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onCheck(task.id)}
        />
        <p style={{textDecoration:task.isCompleted ? "line-through" : "" }}>
          {task.taskName}
        </p>
      </div>
      <div>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};
