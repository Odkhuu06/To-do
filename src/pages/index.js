import { Filter } from "@/components/Filter";
import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
// import {Text} from "@/components/text";
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
    if (filter === "active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "all") {
      return task;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "345px",
        width: "100%",
        filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))",
        margin: "auto",
        gap: "10px",
      }}
    >
      <h1>To-Do list</h1>

      <Form setTaskList={setTaskList} taskList={taskList} />

      <Filter setFilter={setFilter} />

      {filteredTask.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
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
  );
}
