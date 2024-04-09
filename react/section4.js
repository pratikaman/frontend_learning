// use reacting2 projec for reference.

// conditional rendering

// return (
//     <div className='w-full h-screen bg-violet-900 flex items-center justify-center gap-10' >
//       {data.map((e,index)=>(
//         <div  key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
//         <div className='w-full h-32 bg-zinc-300'>
//           <img className='w-full h-full object-cover object-center ' src={e.image}></img>
//         </div>
//         <div className='w-full px-3 py-4 max-h-[150px] overflow-y-scroll'>
//           <h2 className='font-semibold '>{e.itemName}</h2>
//           <p className='text-sm '>{e.itemDesc}</p>
//           <button className={`px-4 py-1 ${e.inStock ? 'bg-blue-500' : 'bg-red-600'}  text-xs rounded text-zinc-100 mt-3 `}>
//             {e.inStock ? "In Stock" : "Out of Stock"}
//           </button>
//         </div>
//       </div>
//       ))} 
//     </div>
//   )


// handling event
// we dont use queryselctor, getelementbyid, getelmentbyclassname etc in react.
// we use onClick, onChange, onSubmit etc in react
