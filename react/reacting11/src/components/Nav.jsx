import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-8 py-2 bg-slate-700 flex justify-end gap-4">
      {/* <Link to="/" className="p-2 bg-purple-800 rounded-xl">Home</Link>
        <Link to="/user" className="p-2 bg-purple-800 rounded-xl">User</Link>
        <Link to="/about" className="p-2 bg-purple-800 rounded-xl">About</Link> */}

      <NavLink
        to="/"
        className="p-2 bg-purple-800 rounded-xl"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/user"
        className="p-2 bg-purple-800 rounded-xl"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        User
      </NavLink>
      <NavLink
        to="/about"
        className="p-2 bg-purple-800 rounded-xl"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
