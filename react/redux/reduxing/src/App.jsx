import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync } from './store/reducers/counterSlice.jsx'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()


  return (
    <div className='w-full h-screen flex flex-col gap-2 justify-center items-center '>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())} className='px-3 py-2 bg-purple-600 rounded-md text-zinc-100'>increment</button>
    <button onClick={() => dispatch(decrement())} className='px-3 py-2 bg-purple-600 rounded-md text-zinc-100'>decrement</button>
    <button onClick={() => dispatch(incrementByAmount(5))} className='px-3 py-2 bg-purple-600 rounded-md text-zinc-100'>increment by 5</button>
    <button onClick={() => dispatch(incrementAsync(5))} className='px-3 py-2 bg-purple-600 rounded-md text-zinc-100'>increment async by 5</button>
    </div>
  )
}

export default App
