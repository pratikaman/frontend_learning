import { useState } from "react";
import Routing from "./utils/Routing";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-full h-screen bg-[#292c33]">
      <Nav />
      <Routing />
    </div>
  );
}

export default App;
