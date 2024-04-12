import React, { useState } from "react";

function Card2() {

    // Method 2 to control forms (in genral any element)
    const [val, setVal] = useState({userName: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        if (val.userName.trim() === ""){
            alert("Please enter your name");
            return;
        }
    }


  return (
    <div className="max-w-60">
      <h2 className="text-3xl font-bold text-center">Using controlled components</h2>
      <form action="" className="flex flex-col gap-4 items-center mt-4" onSubmit={handleSubmit}>
        <input
          onChange={(e)=>{
            return setVal((prev)=>({...prev, userName: e.target.value}))
          }}
          type="text"
          name="userName"
          className="border-2 rounded p-2"
          placeholder="ur name"
        />
        <input
          type="text"
          name="age"
          className="border-2 rounded p-2"
          placeholder="ur age"
        />
        <input
          type="submit"
          className="bg-purple-300 rounded cursor-pointer w-fit px-4 py-2"
        />
      </form>
    </div>
  );
}

export default Card2;
