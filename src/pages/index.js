import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "345px",
        width: "100%",
        margin: "auto",
        gap: "10px",
      }}
    >
      <h1>Todo List</h1>

      <Form setTaskList={setTaskList} taskList={taskList} />

      {taskList.map((task, id) => (
        <Task key={id} task={task} />
      ))}
    </div>
  );
}