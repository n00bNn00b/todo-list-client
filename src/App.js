import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
