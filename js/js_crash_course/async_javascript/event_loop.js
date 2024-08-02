// event loop is a mechanism that makes sure that the code runs in a non-blocking way
// 

// How it works:
// The event loop continuously checks the call stack to see if there's any function that needs to run.
// While doing so, it adds any function call it finds to the call stack and executes each one in order.



// Key components:
// Call Stack: Where function calls are stacked and executed
// Callback Queue: Where callbacks from asynchronous operations are queued
// Microtask Queue: For promises and mutation observer callbacks (higher priority than the callback queue)

// console.log('Start');
// 
// setTimeout(() => {
//   console.log('Timeout callback');
// }, 0);
// 
// Promise.resolve().then(() => {
//   console.log('Promise resolved');
// });
// 
// console.log('End');


// Output:
// 
// Start
// End
// Promise resolved
// Timeout callback