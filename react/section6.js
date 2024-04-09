// use reacting3 project for reference.

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
//  Or if want to update the state based on the previous state then pass a function to setAns like this:
//  setAns((prev)=>{prev+1} 