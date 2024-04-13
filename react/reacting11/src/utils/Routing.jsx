import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "../components/User";
import About from "../components/About";
import Home from "../components/Home";
import UserDetail from "../components/UserDetail";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />}>
           {/* if want to make UserDetail child of User and open it within sma page */}
          <Route path="/user/:name" element={<UserDetail />} />
      </Route>
      <Route path="/about" element={<About />} />
      {/* <Route path="/user/:name" element={<UserDetail />} /> */}
    </Routes>
  );
}

export default Routing;
