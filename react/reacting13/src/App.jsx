import { useState } from "react";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import { Link, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div>
      <nav className="px-4 py-1 bg-purple-500 flex justify-end gap-4">
        <Link
          to="/"
          className="px-2 py-1 bg-teal-400 rounded-md hover:bg-teal-300"
        >
          Home
        </Link>
        <Link
          to="/user"
          className="px-2 py-1 bg-teal-400 rounded-md hover:bg-teal-300"
        >
          User
        </Link>
        <Link
          to="/about"
          className="px-2 py-1 bg-teal-400 rounded-md hover:bg-teal-300"
        >
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:userName" element={<UserDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
