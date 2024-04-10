// use reacting3 project for reference.

// useState state ko turant update ni krta. wo krta hai apne hisaab se function completion ke baad.
// to fix performance issue.

// ex-
// const [val, setVal] = useState(0);
// 
// function App() {
//   const [val3, setVal3] = useState({
//     name: "John",
//     age: 23,
//   });

//   return (
//     <button
//       onClick={() => {
//         setVal3({ ...val3, gender: "male" });
//         console.log(val3);
//       }}
//     >
//       Toggle
//     </button>
//   );
// }

// this will not work as expected. as setVal3 is async. so, console.log will not give the updated value.


// use reacting4 project for see how to add/remove elements from/to an array state in jsx.

