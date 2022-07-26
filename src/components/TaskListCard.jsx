import axios from "axios";
import React, { useState } from "react";

const TaskListCard = ({ task }) => {
  const taskName = task.task;
  const id = task.id;
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleCheckBox = () => {
    setChecked(!checked);
    if (!checked === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleDelete = () => {
    axios.delete(`https://todo-sigma.herokuapp.com/delete/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex mx-auto my-3">
      <div key="{task.id" className="card-body grid grid-cols-3">
        <input
          type="checkbox"
          onChange={handleCheckBox}
          className="checkbox checkbox-primary checkbox-md"
        />
        {!checked ? (
          <span className="font-bold">{taskName} </span>
        ) : (
          <span className="font-bold line-through text-primary">
            {taskName}{" "}
          </span>
        )}
        <button
          className="btn btn-error w-12 btn-xs"
          disabled={disabled}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskListCard;
