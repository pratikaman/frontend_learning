// use reacting2 project for reference.

// State management with hooks

// state ek data hota hai. react is data ka khyal rkhta hai. 
// jb bhi state change hota hai to react page ko update krta hai.

// useState hook se state manage hota hai.
// useState ek function hai jo ek array return karta hai. 
// 1st element of the array is the state and 
// 2nd element is the function to update the state.

// ex- 
//  const ans = useStete(0);
//  ans[0] is the state and ans[1] is the function to update the state.
// 
//  Or we can destructure the array like this:
//  const [ans, setAns] = useState(0);
//
// 
//  setAns(1) will update the state to 1.
// 
//  Or if want to update the state based on the previous state then
//  setAns((prev)=>{prev+1} 