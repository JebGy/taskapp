import "./styles/reset.css";
import "./styles/main.css";

import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [createTask, setCreateTask] = useState(false);
  const [haveTasks, setHaveTasks] = useState(false);

  //load tasks from localstorage
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    const tasks = JSON.parse(data);
    setTasklist(tasks);
    if (tasks !== null) {
      setHaveTasks(true);
    }else{
      setHaveTasks(false);
    }
  }, [createTask]);

  return (
    <div>
      {createTask ? (
        <CreateTask setCreateTask={setCreateTask} />
      ) : (
        <>
          <main>
            <header className="app__header">
              <h1 className="app__title">To Do list</h1>
              <button
                className="create__button"
                onClick={() => {
                  setCreateTask(true);
                }}
              >
                Create Task
              </button>
            </header>
            <div className="app__container">
              <div className="tasks__container">
                {haveTasks ? (
                  tasklist.map((task, index) => (
                    <Task task={task} key={index} setTasklist={setTasklist} />
                  ))
                ) : (
                  <h2 className="app__title">No tasks</h2>
                )}
              </div>
            </div>
            <p className="footer">Created by Favio Gabriel Munayco Rivera 😎</p>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
