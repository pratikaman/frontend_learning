import { useState } from 'react'

function App() {

  const [val, setVal] = useState(0);


  const [val2, setVal2] = useState({
    name: 'John',
    isMale: true
  });

  const [val3, setVal3] = useState(
    {
      name: 'John',
      age: 23,
    }
  );


  return (
   <div className='bg-zinc-200 p-4 h-screen flex flex-col gap-4 items-center justify-center'>


    <h1>{val}</h1>
    <button onClick={()=>setVal((prev)=>prev+1)} className=' w-fit  px-2 py-1 bg-purple-600 text-zinc-200 rounded'>Change</button>



    <div>name: {val2.name}</div>
    <div>gender: {val2.isMale ? "male" : "female"}</div>
    {/* <button onClick={()=>setVal2({...val2, isMale: !val2.isMale})} className={`w-fit  px-2 py-1 ${val2.isMale ? 'bg-blue-600' : 'bg-red-600'} text-zinc-200 rounded`}>Toggle gender</button> */}
    <button onClick={()=>setVal2((prev)=>({...prev, isMale: !prev.isMale}))} className={`w-fit  px-2 py-1 ${val2.isMale ? 'bg-blue-600' : 'bg-red-600'} text-zinc-200 rounded`}>Toggle gender</button>



    <div>gender: {val3.gender ? "male" : "female"}</div>
    <button onClick={()=>setVal3({...val3, gender:'male'})} className={`w-fit  px-2 py-1 ${val3.gender? 'bg-blue-600' : 'bg-red-600'} text-zinc-200 rounded`}>Add gender</button>


   </div>
  )
}

export default App
 