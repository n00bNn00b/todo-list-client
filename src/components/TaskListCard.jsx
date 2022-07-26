import React, { useState } from "react";

const TaskListCard = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked(!checked);
  };
  const handleDelete = () => {
    console.log("clicked");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex mx-auto my-3">
      <div key="{task.id" className="card-body grid grid-cols-3">
        <input
          type="checkbox"
          onChange={handleCheckBox}
          className="checkbox checkbox-md"
        />
        <span>{task.task} </span>
        <button className="btn btn-error w-12 btn-xs" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskListCard;
