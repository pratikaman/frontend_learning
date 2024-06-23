import { useState } from 'react'

function App() {


  return (
    <div className='w-screen h-screen'>
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center  pt-5'>
        <a className='px-5 py-3 border rounded border-blue-200 text-blue-300' href='/create'>Add new product</a>
        <hr className='w-[80%] my-3' />
        <h1 className='w-[80%] text-2xl mb-3'>Category</h1>
        <ul className='w-[80%]'>
          <li>dwd</li>
        </ul>
      </nav>

    </div>
  )
}

export default App
