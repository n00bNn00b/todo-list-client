import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="my-20 text-center">
      <h2 className="text-center text-2xl text-primary font-bold">Home</h2>
      <p className="my-5">To add task click the button below</p>
      <Link className="btn btn-primary btn-md" to="/add">
        {" "}
        Add Task
      </Link>
    </div>
  );
};

export default Home;
