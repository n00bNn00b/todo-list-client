import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskListCard from "./TaskListCard";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
  }, [tasks]);

  return (
    <div className="my-20">
      {tasks.map((task) => (
        <TaskListCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
