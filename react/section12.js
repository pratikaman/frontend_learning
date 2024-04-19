// see project reacting12 for reference.


// when using setState, the component will only re render when the state changes.

// component lifecycle methods
// 1. Mounting (creation)
// 2. Updating- when change in useState or view.
// 3. Unmounting (deletion)


// Updation means-> deleting old component and creating new component.

// reconciliation


// useEffect(
//     () => {
//       console.log("Services mounted");
// 
//       return () => {
//         console.log("Services unmounted");
//       };
//     },
//     [second]
//     // empty array means this effect will only run once when the component mounts and once when the component unmounts.
//     // if we pass a variable in the array, the effect will run when the variable changes.
//   );


//  ---------------------------------------------------------------------------------------------------------------------

// See project reacting13 for reference.
// context api (somewhat like in flutter)


// To use context api, we need to create a context.

// Ex-
// import React from 'react'
// import { createContext, useState } from 'react';
// 
// 
//  // creating a context
// export const UserContext = createContext();
// 
//  // creating a provider
// function AppContext(props) {
// 
// 
//     const [user, setUser] = useState([
//         {userName: "pratik", city: "pune"},
//         {userName: "rahul", city: "delhi"},
//         {userName: "raj", city: "mumbai"},
//     ]);
// 
// 
// 
// 
//   return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>;
// }
// 
// export default AppContext


// Then wrap you main component with the provider.
// Ex-

// ReactDOM.createRoot(document.getElementById("root")).render(
//  
//   
//     <AppContext>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </AppContext>
//   
//    
//   );
  
// Now we can use the context in any component.
// Ex-

// import React from "react";
// import UserDetails from "./UserDetails";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../context/AppContext";
// 
// function User() {
//   const data = useContext(UserContext); <---------------------------- This one.
// 
//   return (
//     <div>
//       <h1>Users</h1>
// 
// 
//       {data.user.map((e, index) => {
//         return (
//           <div key={index} className="w-[140px] bg-blue-200 mb-1">
//             <Link to={`/user/${e.userName}`} className="p-3">{e.userName}</Link>
//           </div>
//         );
//       })}
// 
// 
//     </div>
//   );
// }
// 
// export default User;


