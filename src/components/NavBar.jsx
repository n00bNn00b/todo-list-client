import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <a>Add Task</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">Task List</a>
            </li>
            <li>
              <a>Location</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/">
          ToDo List
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex="0">
            <a>Task List</a>
          </li>
          <li>
            <a>Location</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
