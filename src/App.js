import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
