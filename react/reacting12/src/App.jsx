import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import Services from "./components/Services";


function App() {


  return (
    <div className="w-full ">

      <nav className="px-4 py-2 bg-red-400 flex justify-end gap-4 ">
        <Link to="/" >Home</Link>
        <Link to="/show" >Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />}/>
      </Routes>      

    </div>
  );
}

export default App;
