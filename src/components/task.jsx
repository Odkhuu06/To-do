export const Task = ({ task, removeTaskById, toggleCheckBox }) => {
  const handleToggleCheckBox = () => {
    toggleCheckBox(task.id);
  };

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
      <div style={{ display: "flex", gap: "20px"}}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleToggleCheckBox}
        />
        <p style={{ textDecoration: task.isCompleted ? "line-through" : " " }}>
          {task.taskName}
        </p>
      </div>
      {task.isCompleted &&(
        <button style={{   backgroundColor:" rgba(254, 242, 242, 1)",
            color: "red",
            border: "none",
            padding: "5px 10px",
            borderRadius: "4px",
            marginRight:"20px",
            cursor: "pointer",}} onClick={() => removeTaskById(task.id)}>Delete</button>
      )}
    </div>
  );
};