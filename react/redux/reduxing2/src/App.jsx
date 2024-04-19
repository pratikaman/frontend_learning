import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-full">
      <nav className="px-4 py-2 bg-red-400 flex justify-end gap-4 ">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
