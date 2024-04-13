import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "../components/User";
import About from "../components/About";
import Home from "../components/Home";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
