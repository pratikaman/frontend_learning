import React from "react";
import { Link, Outlet } from "react-router-dom";
function User() {
  return (
    <div className="w-1/2 m-auto mt-10 ">
      <h1 className="text-5xl text-red-100 mb-2 text-center">User</h1>

      <div className="w-full flex flex-col gap-2 text-black pt-4">
        <Link to="/user/rahul" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Rahul</Link>
        <Link to="/user/pratik" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Pratik</Link>
        <Link to="/user/tanya" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Tanya</Link>
        <Link to="/user/neha" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Neha</Link>
      </div>

      {/* if want to show child of User route inside User page only */}
      <Outlet />

    </div>
  );
}

export default User;
