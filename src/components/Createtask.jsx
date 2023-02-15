import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTask({ setCreateTask }) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  //add new task to localstorage with uuid and without replace the values of existing list
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("tasks");
    const tasks = JSON.parse(data);
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
    };
    if (tasks === null) {
      localStorage.setItem("tasks", JSON.stringify([newTask]));
    } else {
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));    
    }
    setCreateTask(false);
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form">
        <h3 className="form__title">Add a new task</h3>
        <input
          required
          className="form__input"
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Task Name"
        />
        <textarea
          required
          className="form__input-area"
          onChange={(e) => setdescription(e.target.value)}
          type="text"
          placeholder="Task Description"
        />
        <button className="form__button" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
