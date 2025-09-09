import { Filter } from "@/components/Filter";
import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      const updatedList = taskList.filter((task) => task.id !== id);
      setTaskList(updatedList);
    }
  };

  const toggleCheckBox = (id) => {
    const toggledTask = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(toggledTask);
  };

  const filteredTask = taskList.filter((task) => {
    if (filter === "Active" && !task.isCompleted) return task;
    if (filter === "Completed" && task.isCompleted) return task;
    if (filter === "All") return task;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          padding: "30px",
          width: "100%",
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxHeight: "600px", 
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
          }}
        >
          ✨ To-Do List
        </h1>

        <Form setTaskList={setTaskList} taskList={taskList} />

        <Filter setFilter={setFilter} />

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingRight: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {filteredTask.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#888",
                fontStyle: "italic",
                marginTop: "15px",
              }}
            >
              No tasks yet. Add one above!
            </p>
          ) : (
            filteredTask.map((task, id) => (
              <Task
                key={id}
                task={task}
                removeTaskById={handleDelete}
                toggleCheckBox={toggleCheckBox}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}
