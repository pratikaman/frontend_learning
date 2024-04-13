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
// See NavLink documentation on react router dom wepage for more details.
// ex- <Link to="/href">Home</Link>


// Create routing like this and put it anywhere just like any other html tag in jsx
// 
// import { Routes, Route } from "react-router-dom";
// <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/user" element={<User />} />
//      <Route path="/about" element={<About />} />
// </Routes>



// To create nested routes, use <Outlet> tag in parent route and then create child routes inside it.
// 
// Example-
// 
// function Routing() {
//     return (
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user" element={<User />}>
//              {/* if want to make UserDetail child of User and open it within sma page */}
//             <Route path="/user/:name" element={<UserDetail />} />
//         </Route>
//         <Route path="/about" element={<About />} />
//       </Routes>
//     );
//   }
//   
//   export default Routing;
// 
// 
// 
// import { Link, Outlet } from "react-router-dom";
// function User() {
//   return (
//     <div className="w-1/2 m-auto mt-10 ">
//       <h1 className="text-5xl text-red-100 mb-2 text-center">User</h1>
// 
//       <div className="w-full flex flex-col gap-2 text-black pt-4">
//         <Link to="/user/rahul" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Rahul</Link>
//         <Link to="/user/pratik" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Pratik</Link>
//         <Link to="/user/tanya" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Tanya</Link>
//         <Link to="/user/neha" className="p-3 bg-red-200 text-3xl hover:bg-red-300">Neha</Link>
//       </div>
// 
//       {/* if want to show child of User route inside User page only */}
//       <Outlet />
// 
//     </div>
//   );
// }
// 
// export default User;


// To get the params from the url, use useParams() hook from react-router-dom.
// Example-
// import { Routes, Route } from "react-router-dom";
// import User from "../components/User";
// import About from "../components/About";
// import Home from "../components/Home";
// import UserDetail from "../components/UserDetail";
// 
// function Routing() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/user" element={<User />}>
//            {/* if want to make UserDetail child of User and open it within sma page */}
//           <Route path="/user/:name" element={<UserDetail />} />
//       </Route>
//       <Route path="/about" element={<About />} />
//       {/* <Route path="/user/:name" element={<UserDetail />} /> */}
//     </Routes>
//   );
// }
// 
// export default Routing;
// 
// 
// 
// import PropTypes from "prop-types";
// import { useParams, useNavigate } from "react-router-dom";
// 
// function UserDetail() {
//   const userName = useParams();
// 
//   const navigate = useNavigate();
// 
//   const handleBack = () => {
//     // navigate("/user");
//     // or 
//     navigate(-1);
//   }
// 
//   return (
//     <div className=" flex flex-col gap-4 items-center justify-center">
//       <div className="text-5xl text-zinc-100 ">Hi..{userName.name}</div>
//       <button onClick={handleBack} className="px-4 py-2 h-fit bg-red-400">Go back</button>
//     </div>
//   );
// }
// 
// UserDetail.propTypes = {
//   userName: PropTypes.string.isRequired,
// };
// 
// export default UserDetail;



// To navigate between pages, use useNavigate() hook from react-router-dom.
// Example-
//
// 
// import { useNavigate } from "react-router-dom";
// 
// const handleBack = () => {
//     navigate("/user"); // to navigate to user page
//    
//     navigate(-1); // to go back to previous page
//   }