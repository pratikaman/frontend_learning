import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const userName = useParams();

  const navigate = useNavigate();

  const handleBack = () => {
    // navigate("/user");
    // or 
    navigate(-1);
  }

  return (
    <div className=" flex flex-col gap-4 items-center justify-center">
      <div className="text-5xl text-zinc-100 ">Hi..{userName.name}</div>
      <button onClick={handleBack} className="px-4 py-2 h-fit bg-red-400">Go back</button>
    </div>
  );
}

UserDetail.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserDetail;
