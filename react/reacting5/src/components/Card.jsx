import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";

function Card() {

  const [val, setVal] = useState(true)

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center select-none'>

      <div className='w-4/12 h-2/6 rounded-md relative flex overflow-hidden'>
        <img className={`shrink-0 w-full h-full object-cover transition-all duration-500 ${val ? "translate-x-[0%]" : "-translate-x-[100%]" }`} src='https://images.unsplash.com/photo-1712315481719-63b726304264?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        <img className={`shrink-0 w-full h-full object-cover transition-all duration-500 ${val ? "translate-x-[0%]" : "-translate-x-[100%]" }`} src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />

        <span onClick={
          ()=> setVal(
            ()=> !val
          )
        } className= 'py-3 px-3 absolute bg-[#ffffff63] bottom-4 right-1/2 translate-x-1/2 rounded-full cursor-pointer'>
        <GoArrowRight size={"1.4em"}/>
        </span>   

      </div>
    </div>
  )
}

export default Card