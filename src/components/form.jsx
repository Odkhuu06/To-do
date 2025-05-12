import { useState } from "react";
import styles from "./styles/Form.module.css";

export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (!inputValue.trim()) {
      alert("Please enter a task!")
      return;
  }
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };

    setTaskList([...taskList, newTask]);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={inputValue}
          placeholder="Add a new task..."
          className={styles.taskInput}
          onChange={handleChange}
            onKeyDown={(enter) => {
    if (enter.key === "Enter") {
      handleAdd();
    }
    }}
        />
      </div>
      <div>
        <button className={styles.taskAddButton} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};
