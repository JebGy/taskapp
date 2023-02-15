import "../styles/main.css";
function Task({ task, setTasklist }) {
  return (
    <div className="task__container" id={task.id}>
      <h2 className="task-title">{task.title}</h2>
      <p className="task-description">{task.description}</p>

      <button
        className={`check__button ${
          task.completed ? "fa-solid" : "fa-regular"
        } fa-square-check`}
        onClick={(e) => {
          //update at localstorage
          const data = localStorage.getItem("tasks");
          const tasks = JSON.parse(data);
          const newTasks = tasks.map((task) => {
            if (task.id === e.target.parentElement.id) {
              task.completed = !task.completed;
            }
            if (task.completed) {
              e.target.classList.remove("fa-regular");
              e.target.classList.add("fa-solid");
            } else {
              e.target.classList.remove("fa-solid");
              e.target.classList.add("fa-regular");
            }

            return task;
          });
          localStorage.setItem("tasks", JSON.stringify(newTasks));
        }}
      ></button>

      <button
        className="trash__button fa-regular fa-trash-can"
        onClick={(e) => {
          //remove task from localstorage
          const data = localStorage.getItem("tasks");
          const tasks = JSON.parse(data);
          const newTasks = tasks.filter((task) => {
            return task.id !== e.target.parentElement.id;
          });
          setTasklist(
            tasks.filter((task) => {
              return task.id !== e.target.parentElement.id;
            })
          );

          localStorage.setItem("tasks", JSON.stringify(newTasks));
        }}
      ></button>
    </div>
  );
}

export default Task;
