import { useState } from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

function App() {
  return (
    <div className="min-h-screen w-full p-4 flex flex-col items-center gap-20 ">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default App;
