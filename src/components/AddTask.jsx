import axios from "axios";
import React from "react";

const AddTask = () => {
  const addHandler = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    // console.log(task);
    axios.post("http://localhost:5000/task", {
      task: task,
    });
    e.target.reset();
  };
  return (
    <div className="my-20">
      <form className="flex justify-center" onSubmit={addHandler}>
        <input
          type="text"
          placeholder="Type Task Name Here..."
          className="input input-bordered w-full max-w-xs mx-2"
          name="task"
          required
        />
        <input className="btn btn-primary mr-2" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTask;
