import React from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AppContext";

function UserDetails() {
  const { userName } = useParams();
  const data = useContext(UserContext);

  const Navigate = useNavigate();

  return (
    <>
      <div>
        {
          data.user.filter((e, index) => {
            return e.userName === userName;
          })[0].city
        }
      </div>

      <button onClick={()=>Navigate(-1)}>Go back</button>
    </>
  );
}

export default UserDetails;
