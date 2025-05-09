import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
import { useState } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState([]);

  const handleDelete = (id) => {
    const updatedList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedList);
  };

  const handleCheck = (id) => {
  
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTaskList(updatedTasks);
  };

  console.log('taskList', taskList)

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

      {taskList.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={handleDelete}
          onCheck={handleCheck}
        />
      ))}
    </div>
  );
}
