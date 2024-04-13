// use reacting11 project for reference
// we use react router dom to create a router in our app. Install it.

// wrap your app component in main.jsx with <BrowserRouter> tag to create a router.
// Like this-
// 
// import { BrowserRouter } from "react-router-dom";
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   );

// Dont use <a> tags to navigate between pages in a react app.
// Instead use <Link> or <NavLink> tags from react-router-dom. Its a inline element.
// A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning".
// ex- <Link to="/href">Home</Link>

// Create routing like this and put it anywhere just like any other html tag in jsx
// 
// import { Routes, Route } from "react-router-dom";
// <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/user" element={<User />} />
//      <Route path="/about" element={<About />} />
// </Routes>


