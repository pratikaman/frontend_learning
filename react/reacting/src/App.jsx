import React from "react";
import Card from "./components/Card";

export default function App() {
  // console.log("hello");

  // const data = ["pratik", "aman"];

  return (
    <div>
      {/* {data.map((e, index)=><h1 key={index} >hello {e}</h1>)} */}
      <Card />
    </div>
  );
}

// export default App;


// or we can also return frament instead of div
// return (
//   <>
//     <Card />
//   </>
// );