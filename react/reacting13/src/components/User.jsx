import React from "react";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/AppContext";

function User() {
  const data = useContext(UserContext);

  return (
    <div>
      <h1>Users</h1>


      {data.user.map((e, index) => {
        return (
          <div key={index} className="w-[140px] bg-blue-200 mb-1">
            <Link to={`/user/${e.userName}`} className="p-3">{e.userName}</Link>
          </div>
        );
      })}


    </div>
  );
}

export default User;
