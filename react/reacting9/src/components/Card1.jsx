import React, { useRef } from "react";

function Card1() {

    // Method 1 to control forms (in genral any element)
    const name = useRef(null);
    const age = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(name.current.type);
        // console.log(name.current.value);
        if (name.current.value.trim() === ""){
            alert("Please enter your name");
            return;
        }

    }

  return (
    <div className="max-w-60">
      <h2 className="text-3xl font-bold text-center">Using useRef</h2>
      <form action="" className="flex flex-col gap-4 items-center mt-4" onSubmit={onSubmit}>
        <input
          ref={name}
          type="text"
          name="userName"
          className="border-2 rounded p-2"
          placeholder="ur name"
        />
        <input
          ref={age}
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

export default Card1;
