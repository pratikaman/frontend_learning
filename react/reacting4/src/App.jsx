import { useState } from 'react'


function App() {

  const [value, setValue] = useState([1,2,3,4,5,6]);

  const [value2, setValue2] = useState([
    {userName: 'Pratik', age: 23 },
    {userName: 'Neha', age: 29 },
    {userName: 'Rahul', age: 47 },
  ]);

  return (
    <>
    {value.map((e, index) => <h1 key={index}>{e}</h1>)}


    <h1>Popping element from array</h1>
    {/* <button onClick={()=> setValue((prev)=> prev.slice(0,-1))} className='px-2 py-1 bg-blue-500 text-zinc-100 rounded-full '>Click</button> */}
    {/* Or */}

    <button onClick={()=> setValue((prev)=> {
      return value.filter((e, index)=> index != value.length-1)
    })} className='px-2 py-1 bg-blue-500 text-zinc-100 rounded-full '>Pop</button>

    <hr></hr>


    <h1>Pushing element to array</h1>
    <button onClick={
      () => {
        setValue(
          [...value, value.length+1]
        )        
      }
    }  className='px-2 py-1 bg-blue-500 text-zinc-100 rounded-full '>Push</button>

    <hr></hr>


    <h1>Changing an object in array of objects </h1>
    {value2.map((e, index) => <h1 key={index}>{e.userName}, {e.age}</h1>)}
    <button onClick={
      () => {
        setValue2(
          ()=> value2.map( e => e.userName === 'Pratik' ? {...e, age: e.age+1} : e)
        )        
      }
    }  className='px-2 py-1 bg-blue-500 text-zinc-100 rounded-full '>Change</button>


    


    </>
  )
}

export default App
