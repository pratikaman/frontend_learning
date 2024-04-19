import React from "react";
import { useEffect, useState } from "react";

function Services() {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is large data");



  useEffect(
    () => {
      console.log("Services mounted");

      return () => {
        console.log("Services unmounted");
      };
    },
    [second]
    // empty array means this effect will only run once when the component mounts and once when the component unmounts.
    // if we pass a variable in the array, the effect will run when the variable changes.
  );


  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-red-100">
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("normal data changed")}
        className="px-2 py-1 bg-red-500 rounded-md"
      >
        Change normal data
      </button>
      <h1>{second}</h1>
      <button
        onClick={() => setSecond("large data changed")}
        className="px-2 py-1 bg-red-500 rounded-md"
      >
        Change large data
      </button>
    </div>
  );
}

export default Services;
